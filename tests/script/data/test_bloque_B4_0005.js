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

//  Id pregunta: 1440 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Comparando los sistemas de compresi&oacute;n de video:";
 choices[0]= new Array();
 choices[0][0] = "La complejidad de compresi&oacute;n es mayor en MPEG-x que en H.26x";
 choices[0][1] = "El retardo producido por H.26x es mayor que el producido por MPEG-x";
 choices[0][2] = "La eficiencia es mayor en los algoritmos H.26x que en los algoritmos MPEG-x";
 choices[0][3] = "Todas las respuestas anteriores son correctas";
 answers[0] = choices[0][0];
 units[0] = "109";
 comments[0] = "Id Pregunta: 1440. ";


//  Id pregunta: 2946 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "DNS: Sistema de nombres de dominio";
 choices[1][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[1][2] = "FTP: Protocolo de transferencia de archivos";
 choices[1][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[1] = choices[1][3];
 units[1] = "100";
 comments[1] = "Id Pregunta: 2946. Examen TIC MAP B 2004";


//  Id pregunta: 2955 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el bit del segmento TCP que le indica al receptor que entregue los datos inmediatamente a la aplicaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "ACK";
 choices[2][1] = "PSH";
 choices[2][2] = "RST";
 choices[2][3] = "PUT";
 answers[2] = choices[2][1];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2955. Examen TIC MAP B 2004";


//  Id pregunta: 2959 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  LMDS";
 choices[3]= new Array();
 choices[3][0] = "Usa el ancho de banda de forma sim&eacute;trica para los canales de subida y bajada";
 choices[3][1] = "Utiliza para transmitir una frecuencia de 10 Gz";
 choices[3][2] = "Reserva un ancho de banda de 3,1 Gz";
 choices[3][3] = "Ofrece un servicio de bucle local a los usuarios";
 answers[3] = choices[3][3];
 units[3] = "107";
 comments[3] = "Id Pregunta: 2959. Tanenbaum";


//  Id pregunta: 2995 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En un switch ethernet";
 choices[4]= new Array();
 choices[4][0] = "todos los puertos trabajan a la misma velocidad";
 choices[4][1] = "puede adaptarse a las distintas velocidades de los host conectados de manera autom&aacute;tica";
 choices[4][2] = "hace labores de enrutamiento a nivel wan";
 choices[4][3] = "sirve &uacute;nicamente para conectar redes ethernet con token ring";
 answers[4] = choices[4][1];
 units[4] = "102";
 comments[4] = "Id Pregunta: 2995. ";


//  Id pregunta: 3010 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;A qu&eacute; se corresponden las siglas 802.11d sobre redes inal&aacute;mbricas?";
 choices[5]= new Array();
 choices[5][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[5][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[5][2] = "A especificaciones de Seguridad";
 choices[5][3] = "A especificiaciones de roaming";
 answers[5] = choices[5][3];
 units[5] = "107";
 comments[5] = "Id Pregunta: 3010. NULL";


//  Id pregunta: 3055 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Dentro de la norma X.400, &iquest; qu&eacute; se entiende por Agente de Usuario (UA)?:";
 choices[6]= new Array();
 choices[6][0] = "El usuario que puede ser una persona o programa de aplicaci&oacute;n";
 choices[6][1] = "Agente que almacena y retransmite los mensajes destinados a un usuario";
 choices[6][2] = "Agente que enruta los mensajes.";
 choices[6][3] = "Proceso de aplicaci&oacute;n que interactua con el sistema de transferencia de mensajes";
 answers[6] = choices[6][3];
 units[6] = "106";
 comments[6] = "Id Pregunta: 3055. ";


//  Id pregunta: 3059 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El l&aacute;ser, como fuente de luz, es:";
 choices[7]= new Array();
 choices[7][0] = "Un oscilador &oacute;ptico basado en la formaci&oacute;n de una onda electromagn&eacute;tica confinada dentro de una cavidad";
 choices[7][1] = "Un rayo luminoso compuesto de ondas de diversas frecuencias";
 choices[7][2] = "Un dispositivo &oacute;ptico con ganancia interna y voltaje de ruptura ";
 choices[7][3] = "Un dispositivo utilizado para seleccionar los componentes de una se&ntilde;al de acuerdo con sus frecuencias";
 answers[7] = choices[7][0];
 units[7] = "99";
 comments[7] = "Id Pregunta: 3059. ";


//  Id pregunta: 3109 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;A qu&eacute; est&aacute;ndar IEEE 802 corresponde el siguiente grupo de caracter&iacute;sticas: &lsquo;Mecanismo de acceso al medio por paso de testigo; topolog&iacute;a en bus l&oacute;gico; contiene las interfaces entre MAC y LLC, as&iacute; como las primitivas de servicio entre MAC y nivel f&iacute;sico&rsquo;?";
 choices[8]= new Array();
 choices[8][0] = "802.2";
 choices[8][1] = "802.4";
 choices[8][2] = "802.6";
 choices[8][3] = "No existe ning&uacute;n est&aacute;ndar IEEE que trate esas caracter&iacute;sticas";
 answers[8] = choices[8][3];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3109. El IEE 802.4 es un paso de testigo en Bus (Topolog&iacute;a F&iacute;sica Bus y L&oacute;gica en Anillo)";


//  Id pregunta: 3236 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes protocolos reporta los problemas de entrega y encaminamiento en IP?:";
 choices[9]= new Array();
 choices[9][0] = "TCP";
 choices[9][1] = "ICMP";
 choices[9][2] = "RIP";
 choices[9][3] = "UDP";
 answers[9] = choices[9][1];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3236. NULL";


//  Id pregunta: 3281 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es el jitter?";
 choices[10]= new Array();
 choices[10][0] = "un dispositivo similar al router pero con mayor inteligencia a la hora de enrutar los paquetes";
 choices[10][1] = "la variabilidad del retardo en la transmisi&oacute;n de informaci&oacute;n por una red";
 choices[10][2] = "un envoltorio software a modo de cortafuegos que se instala sobre protocolos conocidos como TCP o FTP";
 choices[10][3] = "un hacker que se dedica a desenmascarar en la red a otros hackers";
 answers[10] = choices[10][1];
 units[10] = "109";
 comments[10] = "Id Pregunta: 3281. ";


//  Id pregunta: 3294 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; hecho no es correcto en la evoluci&oacute;n del protocolo TCP/IP?:";
 choices[11]= new Array();
 choices[11][0] = "El desarrollador inicial fue ARPANET";
 choices[11][1] = "La publicaci&oacute;n fue por IAB";
 choices[11][2] = "La financiaci&oacute;n corri&oacute; a cargo de DARPA";
 choices[11][3] = "El desarrollador final fue CERN";
 answers[11] = choices[11][3];
 units[11] = "100,112";
 comments[11] = "Id Pregunta: 3294. ";


//  Id pregunta: 3317 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n es m&aacute;s acorde con la tecnolog&iacute;a GPRS?:";
 choices[12]= new Array();
 choices[12][0] = "64 kbps";
 choices[12][1] = "256 kbps";
 choices[12][2] = "384 kbps";
 choices[12][3] = "115 kbps";
 answers[12] = choices[12][3];
 units[12] = "108";
 comments[12] = "Id Pregunta: 3317. ";


//  Id pregunta: 3336 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Cada cabecera de IPv6 tiene una longitud de:";
 choices[13]= new Array();
 choices[13][0] = "32 bytes";
 choices[13][1] = "36 bytes";
 choices[13][2] = "n&uacute;mero de bytes variable seg&uacute;n el tipo de cabecera";
 choices[13][3] = "40 bytes";
 answers[13] = choices[13][3];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3336. NULL";


//  Id pregunta: 3363 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Dentro de la especificaci&oacute;n de la Red Digital de Servicios Integrados, se definen diversos interfaces. Indique cual de las opciones siguientes es verdadera:";
 choices[14]= new Array();
 choices[14][0] = "El interfaz U es el definido entre la central p&uacute;blica y el equipo terminado de red";
 choices[14][1] = "El interfaz U utiliza un par de hilos telef&oacute;nicos como los de la RTB";
 choices[14][2] = "El interfaz U depende de las compa&ntilde;&iacute;as telef&oacute;nicas";
 choices[14][3] = "Todas las respuestas anteriores son ciertas";
 answers[14] = choices[14][3];
 units[14] = "103";
 comments[14] = "Id Pregunta: 3363. ";


//  Id pregunta: 3370 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Dentro de los sistemas m&oacute;viles celulares el t&eacute;rmino 'handover' hace referencia a los problemas relativos a:";
 choices[15]= new Array();
 choices[15][0] = "Traspaso del m&oacute;vil de una c&eacute;lula a otra";
 choices[15][1] = "La incompatibilidad entre sistemas";
 choices[15][2] = "Los sistemas de directorio X.500";
 choices[15][3] = "Los problemas debidos a la saturaci&oacute;n del espectro radioel&eacute;ctrico";
 answers[15] = choices[15][0];
 units[15] = "108";
 comments[15] = "Id Pregunta: 3370. ";


//  Id pregunta: 3400 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El PLCP se incorpora como subnivel de:";
 choices[16]= new Array();
 choices[16][0] = "Nivel 2 de 802.11";
 choices[16][1] = "Nivel 1 de 802.11";
 choices[16][2] = "Nivel 1 de 802.3";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = choices[16][1];
 units[16] = "101,107";
 comments[16] = "Id Pregunta: 3400. ";


//  Id pregunta: 3416 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  HDLC es un protocolo:";
 choices[17]= new Array();
 choices[17][0] = "De enlace, orientado a car&aacute;cter";
 choices[17][1] = "De enlace orientado a bit";
 choices[17][2] = "F&iacute;sico, en serie";
 choices[17][3] = "F&iacute;sico, en paralelo";
 answers[17] = choices[17][1];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3416. NULL";


//  Id pregunta: 3460 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El protocolo TCP (Protocolo de Control de Transmisi&oacute;n) es un protocolo a nivel de transporte orientado a conexi&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Que fue desarrollado expresamente para Internet";
 choices[18][1] = "Que, al igual que el protocolo IP (Protocolo Interredes), son protocolos OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 choices[18][2] = "Que no puede interoperar con protocolos de transporte OSI";
 choices[18][3] = "Que fue dise&ntilde;ado para garantizar la fiabilidad que no ofrece el protocolo IP para establecer comunicaciones fiables entre subredes de datos";
 answers[18] = choices[18][3];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3460. NULL";


//  Id pregunta: 3473 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El subnivel MAC del nivel de enlace de datos de la pila de protocolos OSI proporciona:";
 choices[19]= new Array();
 choices[19][0] = "Las direcciones de los puntos de acceso al servicio";
 choices[19][1] = "Servicios orientados a la conexi&oacute;n";
 choices[19][2] = "Servicios orientados a la conexi&oacute;n con reconocimiento";
 choices[19][3] = "La direcci&oacute;n f&iacute;sica de un dispositivo de la red";
 answers[19] = choices[19][3];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3473. NULL";


//  Id pregunta: 3479 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El tipo de formato de clase C de direcci&oacute;n IP se emplea mayoritariamente para:";
 choices[20]= new Array();
 choices[20][0] = "Las redes de &aacute;rea local";
 choices[20][1] = "Grandes organizaciones p&uacute;blicas y multinacionales que poseen gran n&uacute;mero de subredes";
 choices[20][2] = "Mensajes de difusi&oacute;n m&uacute;ltiple (multicast)";
 choices[20][3] = "Fines experimentales";
 answers[20] = choices[20][0];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3479. NULL";


//  Id pregunta: 3494 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En el entorno de las comunicaciones m&oacute;viles, los t&eacute;rminos &quot;handover&quot; y &quot;handoff&quot;:";
 choices[21]= new Array();
 choices[21][0] = "Son sin&oacute;nimos";
 choices[21][1] = "&quot;Handover&quot; hace referencia a conmutaciones entre diferentes BTS y &quot;handoff&quot; a cambios de canal dentro de la misma BTS";
 choices[21][2] = "&quot;Handoff&quot; es equivalente a &quot;roaming&quot;";
 choices[21][3] = "&quot;Handoff&quot; no existe";
 answers[21] = choices[21][0];
 units[21] = "108";
 comments[21] = "Id Pregunta: 3494. ";


//  Id pregunta: 3527 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En la arquitectura de cortafuegos &quot;screened subnet&quot; o subred apantallada:";
 choices[22]= new Array();
 choices[22][0] = "se dispone de un &uacute;nico router, estando el basti&oacute;n y los dem&aacute;s componentes en la red interna";
 choices[22][1] = "se dispone de 2 routers, interno y externo, y tanto el basti&oacute;n como los dem&aacute;s componentes est&aacute;n en la red interna";
 choices[22][2] = "se dispone de 2 routers, interno y externo, y el basti&oacute;n est&aacute; en una red intermedia desmilitarizada o DMZ";
 choices[22][3] = "no se dispone de ning&uacute;n router, sino de un basti&oacute;n con funciones de proxy que apantalla la red interna y alberga los servidores p&uacute;blicos";
 answers[22] = choices[22][2];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3527. NULL";


//  Id pregunta: 3555 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[23]= new Array();
 choices[23][0] = "Services Oriented Architecture Protocol";
 choices[23][1] = "Simple Object Access Protocol";
 choices[23][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[23][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[23] = choices[23][1];
 units[23] = "69";
 comments[23] = "Id Pregunta: 3555. NULL";


//  Id pregunta: 3583 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indique la opci&oacute;n correcta respecto a la se&ntilde;alizaci&oacute;n en RDSI:";
 choices[24]= new Array();
 choices[24][0] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS7";
 choices[24][1] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal asociado y se le conoce como CCS7";
 choices[24][2] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS9";
 choices[24][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[24] = choices[24][0];
 units[24] = "103";
 comments[24] = "Id Pregunta: 3583. ";


//  Id pregunta: 3584 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indique la opci&oacute;n que mejor refleje el servicio ofrecido por las compa&ntilde;&iacute;as de telecomunicaci&oacute;n, como conmutaci&oacute;n de circuitos:";
 choices[25]= new Array();
 choices[25][0] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, la entrega a la red y libera el circuito";
 choices[25][1] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda variable";
 choices[25][2] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se env&iacute;a la informaci&oacute;n en paquetes";
 choices[25][3] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda de transmisi&oacute;n fijo durante todo el tiempo que permanece establecido el cto";
 answers[25] = choices[25][3];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3584. ";


//  Id pregunta: 3597 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La direcci&oacute;n IP:";
 choices[26]= new Array();
 choices[26][0] = "Es &uacute;nica para cada tarjeta de red";
 choices[26][1] = "Es asignada por una entidad supranacional";
 choices[26][2] = "Puede ser modificada manualmente en UNIX";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3597. NULL";


//  Id pregunta: 3601 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10Base5 es de:";
 choices[27]= new Array();
 choices[27][0] = "100 metros";
 choices[27][1] = "185 metros";
 choices[27][2] = "200 metros";
 choices[27][3] = "500 metros";
 answers[27] = choices[27][3];
 units[27] = "99";
 comments[27] = "Id Pregunta: 3601. ";


//  Id pregunta: 3634 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La RDSI (o ISDN):";
 choices[28]= new Array();
 choices[28][0] = "Implementa todas las capas del modelo OSI";
 choices[28][1] = "Implementa los protocolos TCP/IP";
 choices[28][2] = "Tiene un ancho de banda suficiente para la transmisi&oacute;n de v&iacute;deo sin comprimir";
 choices[28][3] = "Tiene un ancho de banda inferior al t&iacute;pico de las redes locales";
 answers[28] = choices[28][3];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3634. ";


//  Id pregunta: 3639 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La reserva de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico implica que: ";
 choices[29]= new Array();
 choices[29][0] = "No es onerosa para el sujeto obligado";
 choices[29][1] = "Est&aacute; fijada en el Ley General de Presupuestos";
 choices[29][2] = "Seguir&aacute; las leyes de mercado y estimacion de su rentabilidad";
 choices[29][3] = "Las Administraciones P&uacute;blicas no estan exentas de su pago";
 answers[29] = choices[29][2];
 units[29] = "110";
 comments[29] = "Id Pregunta: 3639. ";


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


//  Id pregunta: 3667 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Una arquitectura de red jer&aacute;rquica:";
 choices[31]= new Array();
 choices[31][0] = "Asigna a cada sistema de comunicaciones de la red las mismas funciones";
 choices[31][1] = "Todas las sesiones de la red tienen lugar entre sistemas parejos";
 choices[31][2] = "Un sistema maestro es el encargado de toda la red y realiza funciones de gesti&oacute;n y control";
 choices[31][3] = "Todas las sesiones comparten las funciones de gesti&oacute;n de red";
 answers[31] = choices[31][2];
 units[31] = "104";
 comments[31] = "Id Pregunta: 3667. ";


//  Id pregunta: 3685 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La velocidad del est&aacute;ndar Gigabit Ethernet es:";
 choices[32]= new Array();
 choices[32][0] = "100 Mbps";
 choices[32][1] = "1000 Mbps";
 choices[32][2] = "10000 Mbps";
 choices[32][3] = "100000 Mbps";
 answers[32] = choices[32][1];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3685. ";


//  Id pregunta: 3699 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Las fibras &oacute;pticas:";
 choices[33]= new Array();
 choices[33][0] = "Presentan mayor atenuaci&oacute;n que los pares coaxiales";
 choices[33][1] = "Se necesitan efectuar conversiones O/E y O/E en los terminales emisor y receptor, respectivamente";
 choices[33][2] = "La distorsi&oacute;n multimodo se produce, sobre todo en las de &iacute;ndice gradual";
 choices[33][3] = "Son inmunes a las interferencias electromagn&eacute;ticas";
 answers[33] = choices[33][3];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3699. ";


//  Id pregunta: 3722 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Los cortafuegos de filtrado de paquetes:";
 choices[34]= new Array();
 choices[34][0] = "analizan el tr&aacute;fico de la red fundamentalmente en la capa 3";
 choices[34][1] = "generalmente se usan formando 2 listas de reglas: una con acciones permitidas y otra con acciones denegadas";
 choices[34][2] = "son &uacute;tiles contra ataques de denegaci&oacute;n de servicio, y destacan por su rapidez transparencia y flexibilidad";
 choices[34][3] = "Todas las respuestas anteriores son correctas";
 answers[34] = choices[34][3];
 units[34] = "111";
 comments[34] = "Id Pregunta: 3722. NULL";


//  Id pregunta: 3789 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Respecto a las VPN o redes privadas virtuales a trav&eacute;s de internet se puede decir:";
 choices[35]= new Array();
 choices[35][0] = "que son m&aacute;s flexibles pero requieren un mayor mantenimiento";
 choices[35][1] = "que se ahorran costes pero su rendimiento es menor";
 choices[35][2] = "que se usa una infraestructura compartida pero garantizando la calidad de servicio";
 choices[35][3] = "todo lo anterior es correcto";
 answers[35] = choices[35][1];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3789. ";


//  Id pregunta: 3823 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Se&ntilde;ale la norma de IEEE que se refiere a redes LAN con CSMA/CD:";
 choices[36]= new Array();
 choices[36][0] = "802.1";
 choices[36][1] = "802.2";
 choices[36][2] = "802.3";
 choices[36][3] = "802.4";
 answers[36] = choices[36][2];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3823. NULL";


//  Id pregunta: 3836 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  SOAP es:";
 choices[37]= new Array();
 choices[37][0] = "Synchronized Objects Application Protocol, protocolo de aplicaci&oacute;n sincronizada para objetos";
 choices[37][1] = "System Open Access Protocol, protocolo de acceso abierto a sistemas";
 choices[37][2] = "Simple Object Access Protocol, protocolo de acceso simple a objetos";
 choices[37][3] = "SOAP no se corresponde con ningun acr&oacute;nimo aplicable en tecnolog&iacute;a";
 answers[37] = choices[37][2];
 units[37] = "113";
 comments[37] = "Id Pregunta: 3836. ";


//  Id pregunta: 3953 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Indicar cual no es una directriz de la Ley General de Telecomunicaciones";
 choices[38]= new Array();
 choices[38][0] = "Simplificaci&oacute;n de tr&aacute;mites administrativos";
 choices[38][1] = "Menor vigilancia de la libre competencia";
 choices[38][2] = "Clarificaci&oacute;n en el reparto de competencias";
 choices[38][3] = "Creaci&oacute;n de garant&iacute;as para los operadores";
 answers[38] = choices[38][1];
 units[38] = "110";
 comments[38] = "Id Pregunta: 3953. ";


//  Id pregunta: 3973 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Velocidades de RDSI de banda ancha en Europa";
 choices[39]= new Array();
 choices[39][0] = "1,5  2,6  155  622 Mbps";
 choices[39][1] = "2    51 155  722 Mbps";
 choices[39][2] = "2    34 155  622 Mbps";
 choices[39][3] = "2   34   155  722 Mbps";
 answers[39] = choices[39][2];
 units[39] = "103";
 comments[39] = "Id Pregunta: 3973. ";


//  Id pregunta: 3988 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Sobre FDDI:";
 choices[40]= new Array();
 choices[40][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[40][1] = "Se conoce como X3T9.3";
 choices[40][2] = "Su equivalente en cobre es CDDI";
 choices[40][3] = "Todas son verdaderas";
 answers[40] = choices[40][2];
 units[40] = "101";
 comments[40] = "Id Pregunta: 3988. ";


//  Id pregunta: 4051 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Si tenemos un web server en la DMZ &iquest;Qu&eacute; puerto t&iacute;picamente debemos abrir en el firewall?";
 choices[41]= new Array();
 choices[41][0] = "El primer puerto libre del firewall";
 choices[41][1] = "El puerto 80";
 choices[41][2] = "El primer puerto libre desde el 80";
 choices[41][3] = "No es necesario abrir puerto alguno";
 answers[41] = choices[41][1];
 units[41] = "111";
 comments[41] = "Id Pregunta: 4051. NULL";


//  Id pregunta: 4091 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  En .NET el c&oacute;digo fuente se compila a un lenguaje intermedio";
 choices[42]= new Array();
 choices[42][0] = "que se llama Bytecode, igual que en Jaba";
 choices[42][1] = "denominado IL, Lenguaje intermedio";
 choices[42][2] = "No se compila, sino que el c&oacute;digo es interpretado directamente por un int&eacute;rprete CLR";
 choices[42][3] = "que depende de la m&aacute;quina en la que se va a ejecutar";
 answers[42] = choices[42][1];
 units[42] = "115";
 comments[42] = "Id Pregunta: 4091. ";


//  Id pregunta: 4145 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario comienza a realizar acciones destructivas sobre el sistema en un momento determinado de tiempo o a ra&iacute;z de una acci&oacute;n concreta se llama";
 choices[43]= new Array();
 choices[43][0] = "sniffer";
 choices[43][1] = "bomba l&oacute;gica";
 choices[43][2] = "troyano";
 choices[43][3] = "gusano";
 answers[43] = choices[43][1];
 units[43] = "111";
 comments[43] = "Id Pregunta: 4145. NULL";


//  Id pregunta: 4166 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Qu&eacute; ataque es el m&aacute;s efectivo frente a una VPN IPSec";
 choices[44]= new Array();
 choices[44][0] = "Fuerza bruta";
 choices[44][1] = "Hombre en el medio";
 choices[44][2] = "An&aacute;lisis de tr&aacute;fico";
 choices[44][3] = "Replicaci&oacute;n (replay)";
 answers[44] = choices[44][1];
 units[44] = "111";
 comments[44] = "Id Pregunta: 4166. NULL";


//  Id pregunta: 4213 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  En el formato gr&aacute;fico JPEG &iquest;Cu&aacute;l de estas opciones no es verdadera?";
 choices[45]= new Array();
 choices[45][0] = "Permite seleccionar la mayor o menor p&eacute;rdida de calidad en la compresi&oacute;n";
 choices[45][1] = "Usa el mismo algoritmo de compresi&oacute;n que el ZIP";
 choices[45][2] = "Su nombre oficial es ISO/IEC IS 10918";
 choices[45][3] = "La &uacute;ltima versi&oacute;n es JPEG 2000";
 answers[45] = choices[45][1];
 units[45] = "114";
 comments[45] = "Id Pregunta: 4213. ";


//  Id pregunta: 4227 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&quot;Thick&quot;)?";
 choices[46]= new Array();
 choices[46][0] = "BNC";
 choices[46][1] = "N-series";
 choices[46][2] = "TNC";
 choices[46][3] = "SMA-series";
 answers[46] = choices[46][1];
 units[46] = "99";
 comments[46] = "Id Pregunta: 4227. ";


//  Id pregunta: 4232 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  La sintaxis de transferencia OSI, los metaficheros gr&aacute;ficos, la sint&aacute;xis de procedimiento comercial y los elementos de mensajes y datos son normas:";
 choices[47]= new Array();
 choices[47][0] = "Sobre medios magn&eacute;ticos y &oacute;pticos";
 choices[47][1] = "Para representaci&oacute;n de informaci&oacute;n y datos intercambiados";
 choices[47][2] = "Del equipo l&oacute;gico";
 choices[47][3] = "Sobre juegos de caracteres y codificaci&oacute;n";
 answers[47] = choices[47][1];
 units[47] = "100";
 comments[47] = "Id Pregunta: 4232. ";


//  Id pregunta: 4550 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  El Sistema de Comunicaciones Moviles Europeo de Tercera Generacion recibe el nombre de:";
 choices[48]= new Array();
 choices[48][0] = "UMTS";
 choices[48][1] = "EDGE";
 choices[48][2] = "DCS-1800.";
 choices[48][3] = "PHS";
 answers[48] = choices[48][0];
 units[48] = "108";
 comments[48] = "Id Pregunta: 4550. ";


//  Id pregunta: 4662 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA ";
 choices[49]= new Array();
 choices[49][0] = "7.2Mbps";
 choices[49][1] = "14.4Mbps";
 choices[49][2] = "4.8Mbps";
 choices[49][3] = "10.7Mbps";
 answers[49] = choices[49][1];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4662. ";


//  Id pregunta: 4855 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, frecuencias o canales radioel&eacute;ctricos no adecuada al correspondiente plan de utilizaci&oacute;n del espectro radioel&eacute;ctrico o al Cuadro Nacional de Atribuci&oacute;n de Frecuencia:";
 choices[50]= new Array();
 choices[50][0] = "Es una infracci&oacute;n muy grave";
 choices[50][1] = "Es una infracci&oacute;n grave";
 choices[50][2] = "Es una infracci&oacute;n leve";
 choices[50][3] = "No es una infracci&oacute;n";
 answers[50] = choices[50][0];
 units[50] = "110";
 comments[50] = "Id Pregunta: 4855. ";


//  Id pregunta: 4866 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  El atributo de posicionamiento de un applet &quot;absbottom&quot;:";
 choices[51]= new Array();
 choices[51][0] = "Coloca el applet en el margen izquierdo de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado asu derecha";
 choices[51][1] = "Coloca el applet en el margen derecho de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a suizquierda";
 choices[51][2] = "Coloca la parte inferior del applet coincidiendo con el centro de la l&iacute;nea actual";
 choices[51][3] = "Coloca la parte superior del applet coincidiendo con la parte superior del texto en la l&iacute;nea actual";
 answers[51] = choices[51][2];
 units[51] = "116";
 comments[51] = "Id Pregunta: 4866. ";


//  Id pregunta: 5056 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar unrecurso de la web:";
 choices[52]= new Array();
 choices[52][0] = "El nombre del recurso";
 choices[52][1] = "El tipo del recurso";
 choices[52][2] = "Donde se encuentra el recurso";
 choices[52][3] = "El protocolo que hay que usar para obtener el recurso";
 answers[52] = choices[52][1];
 units[52] = "112";
 comments[52] = "Id Pregunta: 5056. Examen TIC A 2007";


//  Id pregunta: 6003 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[53]= new Array();
 choices[53][0] = "Extraer la direcci&oacute;n de correo de un usuario.";
 choices[53][1] = "Relacionar sucesivas conexiones de un cliente.";
 choices[53][2] = "Enviar un objeto al cliente cuando su copia cach&eacute; est&aacute; obsoleta.";
 choices[53][3] = "Enviar c&oacute;digo embebido en la p&aacute;gina HTML que se ejecutar&aacute; en el cliente.";
 answers[53] = choices[53][1];
 units[53] = "113";
 comments[53] = "Id Pregunta: 6003. TIC A 2009";


//  Id pregunta: 6246 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes son implementaciones de Java Persistence API?";
 choices[54]= new Array();
 choices[54][0] = "Mediator";
 choices[54][1] = "Composite";
 choices[54][2] = "Facade";
 choices[54][3] = "Kodo";
 answers[54] = choices[54][3];
 units[54] = "116";
 comments[54] = "Id Pregunta: 6246. TICB-2009, bloque desarrollo";


//  Id pregunta: 6354 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Los interesados en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado servicio de comunicaciones electr&oacute;nicas deber&aacute;n comunicarlo al Registro de Operadores en los t&eacute;rminos que se determinen mediante ";
 choices[55]= new Array();
 choices[55][0] = "Real Decreto";
 choices[55][1] = "Resoluci&oacute;n Motivada";
 choices[55][2] = "Orden Ministerial";
 choices[55][3] = "Acuerdo del Consejo de Ministros";
 answers[55] = choices[55][0];
 units[55] = "110";
 comments[55] = "Id Pregunta: 6354. Art&iacute;culo 6.2 Ley 32/2003";


//  Id pregunta: 6476 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Indique la respuesta incorrecta sobre Java EE 5:";
 choices[56]= new Array();
 choices[56][0] = "Servlets, JavaServer Faces, JavaServer Pages y Applets son componentes web.";
 choices[56][1] = "Java EE 5 es un modelo multicapa distribuido, que contempla: capa cliente, capa web, capa de negocio y capa de sistemas de informaci&oacute;n empresarial";
 choices[56][2] = "El servidor Java EE proporciona el contenedor EJB";
 choices[56][3] = "La plataforma contempla dos tipos de clientes: el cliente basado en navegador (o cliente ligero) y el cliente de aplicaci&oacute;n (o cliente pesado)";
 answers[56] = choices[56][0];
 units[56] = "116";
 comments[56] = "Id Pregunta: 6476. Castilla La Mancha 2009";


//  Id pregunta: 6548 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;C&oacute;mo se utiliza un protocolo reto/respuesta con una implementaci&oacute;n con un dispositivo de tokens?";
 choices[57]= new Array();
 choices[57][0] = "Este protocolo no se usa, se usa la criptograf&iacute;a";
 choices[57][1] = "El servicio de autenticaci&oacute;n genera un reto y el dispositivo inteligente genera una respuesta basado en el reto";
 choices[57][2] = "El dispositivo pide el usuario y la contrase&ntilde;a";
 choices[57][3] = "El dispositivo compara la contrase&ntilde;a del usuario contra una base de datos de credenciales";
 answers[57] = choices[57][1];
 units[57] = "111";
 comments[57] = "Id Pregunta: 6548. NULL";


//  Id pregunta: 6549 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Qu&eacute; m&eacute;todo de control de acceso est&aacute; dirigida al usuario?";
 choices[58]= new Array();
 choices[58][0] = "No discrecional";
 choices[58][1] = "MAC";
 choices[58][2] = "Basado en identidades";
 choices[58][3] = "DAC";
 answers[58] = choices[58][3];
 units[58] = "111";
 comments[58] = "Id Pregunta: 6549. NULL";


//  Id pregunta: 7259 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En un servidor DNS, un registro MX hace referencia a:";
 choices[59]= new Array();
 choices[59][0] = "Un servidor web";
 choices[59][1] = "Un servidor de correo";
 choices[59][2] = "Un servidor seguro";
 choices[59][3] = "El servidor DNS principal";
 answers[59] = choices[59][1];
 units[59] = "106";
 comments[59] = "Id Pregunta: 7259. Examen TIC B 2009";


//  Id pregunta: 8275 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  En el protocolo Internet Protocol versi&oacute;n 6 (IPv6), &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[60]= new Array();
 choices[60][0] = "S&oacute;lo se permite fragmentar en el origen.";
 choices[60][1] = "No tiene un mecanismo equivalente al del bit Don't Fragment (DF) de IPv4.";
 choices[60][2] = "Se requiere que todos los enlaces tengan un MTU de 1500 octetos o mayor.";
 choices[60][3] = "Un jumbograma es un paquete IPv6 que contiene una carga &uacute;til (payload) mayor que 65535 octetos.";
 answers[60] = choices[60][2];
 units[60] = "100";
 comments[60] = "Id Pregunta: 8275. Examen TIC A1 2010";


//  Id pregunta: 8427 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no es un tipo de SSO (Single Sign-On)?";
 choices[61]= new Array();
 choices[61][0] = "Enterprise SSO";
 choices[61][1] = "Web SSO";
 choices[61][2] = "Kerberos";
 choices[61][3] = "Novell";
 answers[61] = choices[61][3];
 units[61] = "118";
 comments[61] = "Id Pregunta: 8427. ";


//  Id pregunta: 8443 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera una mejora de IPv6 respecto a IPv4?";
 choices[62]= new Array();
 choices[62][0] = "Capacidad extendida del direccionamiento";
 choices[62][1] = "Seguridad de nivel de aplicaci&oacute;n obligatoria";
 choices[62][2] = "Movilidad";
 choices[62][3] = "Multicast";
 answers[62] = choices[62][1];
 units[62] = "100";
 comments[62] = "Id Pregunta: 8443. NULL";


//  Id pregunta: 8462 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[63]= new Array();
 choices[63][0] = "P&aacute;ginas Asp y VBScript";
 choices[63][1] = "Applet, Servlets, EJBs";
 choices[63][2] = "Javascript y p&aacute;ginas JSP";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][1];
 units[63] = "116";
 comments[63] = "Id Pregunta: 8462. Analista Ayto. Madrid 2010";


//  Id pregunta: 8475 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  El est&aacute;ndar IEEE 802.16 hace referencia a:";
 choices[64]= new Array();
 choices[64][0] = "Bluetooth.";
 choices[64][1] = "Wi-Fi.";
 choices[64][2] = "Wimax.";
 choices[64][3] = "Wireless LAN.";
 answers[64] = choices[64][2];
 units[64] = "107";
 comments[64] = "Id Pregunta: 8475. Examen TIC A2 2010 interna";


//  Id pregunta: 8546 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;En qu&eacute; recomendaci&oacute;n de la Uni&oacute;n Internacional de Telecomunicaciones viene recogida la tecnolog&iacute;a ADSL-Lite?";
 choices[65]= new Array();
 choices[65][0] = "ITU G.992.1.";
 choices[65][1] = "ITU G.992.2";
 choices[65][2] = "ITU G.992.3.";
 choices[65][3] = "ITUG.992.4.";
 answers[65] = choices[65][1];
 units[65] = "107";
 comments[65] = "Id Pregunta: 8546. Examen TIC A2 2010 interna";


//  Id pregunta: 8547 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[66]= new Array();
 choices[66][0] = "Al servidor DNS principal";
 choices[66][1] = "Al servidor de correo asociado al dominio";
 choices[66][2] = "Al servidor seguro asociado al dominio";
 choices[66][3] = "Ninguna de las anteriores es correcta";
 answers[66] = choices[66][1];
 units[66] = "106";
 comments[66] = "Id Pregunta: 8547. Analista Ayto. Madrid 2010";


//  Id pregunta: 8852 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.4 tenemos:";
 choices[67]= new Array();
 choices[67][0] = "P&aacute;ginas Asp y DLL";
 choices[67][1] = "Applet, Servlets, EJBs";
 choices[67][2] = "Javascript y p&aacute;ginas JSP";
 choices[67][3] = "Componentes COM";
 answers[67] = choices[67][1];
 units[67] = "116";
 comments[67] = "Id Pregunta: 8852. Analista Ayto. Madrid 2010";


//  Id pregunta: 8905 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  FTP es un protocolo de la pila TCP/IP:";
 choices[68]= new Array();
 choices[68][0] = "Del nivel de Aplicaci&oacute;n.";
 choices[68][1] = "Del nivel de Transporte.";
 choices[68][2] = "Del nivel de Red.";
 choices[68][3] = "De nivel de Sesi&oacute;n";
 answers[68] = choices[68][0];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8905. Operador Ayto. Madrid 2010";


//  Id pregunta: 8991 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En radio, &iquest;Qu&eacute; quiere decir MIMO?";
 choices[69]= new Array();
 choices[69][0] = "Maximum Input, Minimum Output";
 choices[69][1] = "Minimum Input, Maximum Output";
 choices[69][2] = "Multiple-Input Multible-Output";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][2];
 units[69] = "107";
 comments[69] = "Id Pregunta: 8991. NULL";


//  Id pregunta: 9051 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Con respecto a las siguientes siglas:";
 choices[70]= new Array();
 choices[70][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[70][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[70][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[70][3] = "Todas las anteriores";
 answers[70] = choices[70][3];
 units[70] = "108";
 comments[70] = "Id Pregunta: 9051. ";


//  Id pregunta: 9329 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  El cable bs/ utp";
 choices[71]= new Array();
 choices[71][0] = "Es un cable de pantalla global de aluminio y una trenza de cobre recubriendola";
 choices[71][1] = "";
 choices[71][2] = "Presenta apantallamiento";
 choices[71][3] = "No presenta apantallamiento global";
 answers[71] = choices[71][0];
 units[71] = "99";
 comments[71] = "Id Pregunta: 9329. NULL";


//  Id pregunta: 9334 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[72]= new Array();
 choices[72][0] = "UTP - Unshielded Twisted Pair.";
 choices[72][1] = "STP - Shielded Twisted Pair.";
 choices[72][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[72][3] = "FTP - Foiled Twisted Pair.";
 answers[72] = choices[72][2];
 units[72] = "99";
 comments[72] = "Id Pregunta: 9334. TIC_a1_ejer_AGE_2011";


//  Id pregunta: 9366 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Resilient Packet Ring";
 choices[73]= new Array();
 choices[73][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[73][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[73][2] = "Es incompatible con Ethernet.";
 choices[73][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[73] = choices[73][3];
 units[73] = "101";
 comments[73] = "Id Pregunta: 9366. ";


//  Id pregunta: 9517 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Respecto a los EJB, indique la afirmaci&oacute;n incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "Son objetos de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida";
 choices[74][1] = "S&oacute;lo existen tres tipos: session, entity y message-driven";
 choices[74][2] = "Se ejecutan en contenedores EJB";
 choices[74][3] = "Los EJB de tipo session pueden ser a su vez SLSB y SFSB";
 answers[74] = choices[74][0];
 units[74] = "116";
 comments[74] = "Id Pregunta: 9517. NULL";


//  Id pregunta: 9654 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  El framework de JAVA para desarrollo web se llama:";
 choices[75]= new Array();
 choices[75][0] = "Maverick";
 choices[75][1] = "Mavericks";
 choices[75][2] = "Cocoa";
 choices[75][3] = "Kit Kat";
 answers[75] = choices[75][0];
 units[75] = "116";
 comments[75] = "Id Pregunta: 9654. Mavericks es el sistema operativo OS X de Apple";


//  Id pregunta: 9840 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes opciones est&aacute; considerada como la caracter&iacute;stica m&aacute;s segura de una red WLAN?";
 choices[76]= new Array();
 choices[76][0] = "Configuraci&oacute;n de SSID (Service Ser Identifier).";
 choices[76][1] = "Clave WEP.";
 choices[76][2] = "Selecci&oacute;n del canal.";
 choices[76][3] = "Configuraci&oacute;n de la energ&iacute;a.";
 answers[76] = choices[76][1];
 units[76] = "111";
 comments[76] = "Id Pregunta: 9840. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9855 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En lo que se refiere a las Firmas Digitales, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa? ";
 choices[77]= new Array();
 choices[77][0] = "Si una firma digital es v&aacute;lida para un documento es v&aacute;lida para otro distinto. ";
 choices[77][1] = "S&oacute;lo puede ser generada por su leg&iacute;timo titular.";
 choices[77][2] = "Es p&uacute;blicamente verificable.";
 choices[77][3] = "La forma m&aacute;s extendida de calcular firmas digitales consiste en emplear una combinaci&oacute;n de cifrado asim&eacute;trico y funciones resumen. ";
 answers[77] = choices[77][0];
 units[77] = "111";
 comments[77] = "Id Pregunta: 9855. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9867 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;A qui&eacute;n corresponde la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n de acuerdo a la Ley 9/2014, General de Telecomunicaciones?";
 choices[78]= new Array();
 choices[78][0] = "Al Gobierno.";
 choices[78][1] = "A la Comisi&oacute;n del Mercado de las Telecomunicaciones";
 choices[78][2] = "Al Ministerio de Ciencia y Tecnolog&iacute;a (hoy, Ministerio de Industria, Energ&iacute;a y Turismo).";
 choices[78][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[78] = choices[78][0];
 units[78] = "110";
 comments[78] = "Id Pregunta: 9867. TIC A1, Examen 2013";


//  Id pregunta: 10032 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[79]= new Array();
 choices[79][0] = "95.26.35.144/30 ";
 choices[79][1] = "95.26.35.144/29";
 choices[79][2] = "95.26.35.128/27 ";
 choices[79][3] = "95.26.35.128/25";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 10032. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[80]= new Array();
 choices[80][0] = "RSVP ";
 choices[80][1] = "ARP";
 choices[80][2] = "802.1ar ";
 choices[80][3] = "H.264";
 answers[80] = choices[80][0];
 units[80] = "100, 109";
 comments[80] = "Id Pregunta: 10042. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10044 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[81]= new Array();
 choices[81][0] = "LSP (Label Switched Path).";
 choices[81][1] = "LSR (Label Switching Router).";
 choices[81][2] = "FEC (Forwarding Equivalence Class).";
 choices[81][3] = "ILP (Incoming Label Protocol).";
 answers[81] = choices[81][3];
 units[81] = "100";
 comments[81] = "Id Pregunta: 10044. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10050 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[82]= new Array();
 choices[82][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[82][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[82][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[82][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[82] = choices[82][3];
 units[82] = "111";
 comments[82] = "Id Pregunta: 10050. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10071 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[83]= new Array();
 choices[83][0] = "GPRS ";
 choices[83][1] = "HSDPA";
 choices[83][2] = "HSUPA ";
 choices[83][3] = "UMTS";
 answers[83] = choices[83][1];
 units[83] = "108";
 comments[83] = "Id Pregunta: 10071. TIC A2, libre, Examen 2013";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  MTU es:";
 choices[84]= new Array();
 choices[84][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[84][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[84][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[84][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[84] = choices[84][0];
 units[84] = "101";
 comments[84] = "Id Pregunta: 10114. Maximum Transfer Unit";


//  Id pregunta: 10128 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en: ";
 choices[85]= new Array();
 choices[85][0] = "El elemento gestionado";
 choices[85][1] = "El nodo de gesti&oacute;n central";
 choices[85][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[85][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[85] = choices[85][0];
 units[85] = "104";
 comments[85] = "Id Pregunta: 10128. ";


//  Id pregunta: 10304 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[86]= new Array();
 choices[86][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[86][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[86][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[86][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[86] = choices[86][3];
 units[86] = "100";
 comments[86] = "Id Pregunta: 10304. TIC A2, libre, examen 2013";


//  Id pregunta: 10538 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En IPv6, se&ntilde;ale el prefijo empleado para direcciones link-local:";
 choices[87]= new Array();
 choices[87][0] = "fd00::/8";
 choices[87][1] = "fe00::/64";
 choices[87][2] = "fe80::/64";
 choices[87][3] = "No existen las direcciones link-local en IPv6";
 answers[87] = choices[87][2];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10538. NULL";


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


//  Id pregunta: 10801 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[89]= new Array();
 choices[89][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[89][1] = "Cuando haya recibido al menos dos ACK.";
 choices[89][2] = "Cuando reciba cualquier ACK.";
 choices[89][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[89] = choices[89][2];
 units[89] = "100";
 comments[89] = "Id Pregunta: 10801. Examen GSI 2014";


//  Id pregunta: 10802 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[90]= new Array();
 choices[90][0] = "Request.";
 choices[90][1] = "Invoke.";
 choices[90][2] = "Response.";
 choices[90][3] = "Confirmation.";
 answers[90] = choices[90][1];
 units[90] = "100";
 comments[90] = "Id Pregunta: 10802. Examen GSI 2014";


//  Id pregunta: 10885 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  El protocolo DHCP (Dynamic Host Configuration Protocol) y DHCPv6 (DHCP for IPv6) est&aacute;n definidos en los documentos:";
 choices[91]= new Array();
 choices[91][0] = "RFC 792 y RFC 4361, respectivamente.";
 choices[91][1] = "RFC 826 y RFC 3315, respectivamente.";
 choices[91][2] = "RFC 1034 y RFC 4361, respectivamente.";
 choices[91][3] = "RFC 2131 y RFC 3315, respectivamente.";
 answers[91] = choices[91][3];
 units[91] = "100";
 comments[91] = "Id Pregunta: 10885. Examen GSI 2014";


//  Id pregunta: 10894 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En el protocolo RIP Version 2 (Routing Information Protocol), cuyo algoritmo est&aacute; basado en vector distancia, el l&iacute;mite m&aacute;ximo de saltos a partir del cual se considera una ruta como inalcanzable es:";
 choices[92]= new Array();
 choices[92][0] = "15 saltos.";
 choices[92][1] = "9 saltos.";
 choices[92][2] = "16 saltos.";
 choices[92][3] = "7 saltos.";
 answers[92] = choices[92][0];
 units[92] = "102";
 comments[92] = "Id Pregunta: 10894. Examen GSI 2014";


//  Id pregunta: 10913 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto al est&aacute;ndar IEEE 802.11ac-2013:";
 choices[93]= new Array();
 choices[93][0] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 2,4 GHz.";
 choices[93][1] = "Ampl&iacute;a ancho de banda de canal a 40 MHz y opera en la banda de 2,4 GHz.";
 choices[93][2] = "Ampl&iacute;a ancho de banda de canal a 80 MHz y opera en la banda de 60 GHz.";
 choices[93][3] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 5 GHz.";
 answers[93] = choices[93][3];
 units[93] = "107";
 comments[93] = "Id Pregunta: 10913. Examen GSI 2014";


//  Id pregunta: 10916 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;En qu&eacute; consiste la liberaci&oacute;n del dividendo digital?";
 choices[94]= new Array();
 choices[94][0] = "Es el proceso por el que se volvieron a repartir las frecuencias del espectro radioel&eacute;ctrico de los 900 MHz, anteriormente asignadas a Movistar, Vodafone y Orange, a aquellos operadores que lo solicitaron, de forma que pudieran ser utilizadas para ofrecer servicios m&oacute;viles LTE/4G.";
 choices[94][1] = "Se denomina as&iacute; al espectro asignado a la emisi&oacute;n de televisi&oacute;n anal&oacute;gica, que va a pasar a ser utilizado por tecnolog&iacute;as LTE/4G.";
 choices[94][2] = "Se denomina as&iacute; al espectro recuperado al hacerse efectiva la transici&oacute;n a la televisi&oacute;n digital terrestre.";
 choices[94][3] = "Es el proceso de reordenaci&oacute;n de algunos canales TDT, para liberar las frecuencias radioel&eacute;ctricas de la banda de 800 MHz que ser&aacute; utilizada por tecnolog&iacute;as m&oacute;viles LTE/4G.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 10916. Examen GSI 2014";


//  Id pregunta: 11178 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes componentes es de nivel 2?";
 choices[95]= new Array();
 choices[95][0] = "Repetidores";
 choices[95][1] = "Puentes";
 choices[95][2] = "Enrutadores";
 choices[95][3] = "Concentradores";
 answers[95] = choices[95][1];
 units[95] = "102";
 comments[95] = "Id Pregunta: 11178. ";


//  Id pregunta: 11226 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  A partir de que versi&oacute;n adopt&oacute; la antigua Sun Microsystem un cambio en la nomenclatura de las versiones en sus productos Java.";
 choices[96]= new Array();
 choices[96][0] = "Hasta la versi&oacute;n 1.2, siendo la versi&oacute;n 3.0 la primera en numerarse de esta forma.";
 choices[96][1] = "Hasta la versi&oacute;n 1.3, siendo la versi&oacute;n 4.0 la primera en numerarse de esta forma.";
 choices[96][2] = "Hasta la versi&oacute;n 1.4, siendo la versi&oacute;n 5.0 la primera en numerarse de esta forma.";
 choices[96][3] = "El versionado ha sido siempre 1.x.";
 answers[96] = choices[96][2];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11226. ";


//  Id pregunta: 11413 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, General de Telecomunicaciones, es facultad del gobierno para la administraci&oacute;n del espectro:";
 choices[97]= new Array();
 choices[97][0] = "Aprobaci&oacute;n del CNAF previa elaboraci&oacute;n del MINETUR.";
 choices[97][1] = "La determinaci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica de cuyo control se encarga MINETUR.";
 choices[97][2] = "Establecer el procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencia.";
 choices[97][3] = "El otorgamiento de las autorizaciones de uso.";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11413. ";


//  Id pregunta: 11462 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cu&aacute;l de los siguientes no es un derecho de los usuarios recogido en la Ley 9/2014:";
 choices[98]= new Array();
 choices[98][0] = "Derecho a figurar en las gu&iacute;as de abonados.";
 choices[98][1] = "A recibir facturas no desglosadas a petici&oacute;n del usuario.";
 choices[98][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[98][3] = "A recibir llamadas autom&aacute;ticas sin intervenci&oacute;n humana o mensajes de fax, con fines de comunicaci&oacute;n comercial sin haber prestado su consentimiento previo e informado para ello.";
 answers[98] = choices[98][3];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11462. ";


//  Id pregunta: 11655 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En la tecnolog&iacute;a RDSI, la interfaz entre un equipo de usuario no compatible con RDSI y el correspondiente terminal adaptador recibe el nombre de punto de referencia:";
 choices[99]= new Array();
 choices[99][0] = "P";
 choices[99][1] = "R";
 choices[99][2] = "S";
 choices[99][3] = "T";
 answers[99] = choices[99][1];
 units[99] = "103";
 comments[99] = "Id Pregunta: 11655. ";


