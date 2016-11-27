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

//  Id pregunta: 1472 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  MPEG es:";
 choices[0]= new Array();
 choices[0][0] = "Mobile Photographs Evolution using GPRS, tecnolog&iacute;a para transmitir fotograf&iacute;as usando un m&oacute;vil GPRS";
 choices[0][1] = "Mobile Protocols Expert Group, grupo de trabajo de ISO experto en la aplicaci&oacute;n de distintos protocolos a la tecnolog&iacute;a inal&aacute;mbrica m&oacute;vil";
 choices[0][2] = "Multimedia Protocols for Evolution of GSM: conjunto de protocolos desarrollados para dispositivos m&oacute;viles que potencian las capacidades multimedia contempladas en la actual GSM";
 choices[0][3] = "Moving Pictures Expert Group, grupo de trabajo de ISO cuya misi&oacute;n es desarrollar est&aacute;ndares de compresi&oacute;n para audio y video";
 answers[0] = choices[0][3];
 units[0] = "114";
 comments[0] = "Id Pregunta: 1472. ";


//  Id pregunta: 2887 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El sistema EURODAC de TESTA II intercambia informaci&oacute;n entre las Administraciones P&uacute;blicas europeas referentes a:";
 choices[1]= new Array();
 choices[1][0] = "inmigraci&oacute;n";
 choices[1][1] = "accidentes de tr&aacute;fico";
 choices[1][2] = "ofertas de empleo";
 choices[1][3] = "fondos estructurales";
 answers[1] = choices[1][0];
 units[1] = "103";
 comments[1] = "Id Pregunta: 2887. ";


//  Id pregunta: 2992 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderse con su router por defecto";
 choices[2]= new Array();
 choices[2][0] = "10.2.40.64";
 choices[2][1] = "10.2.41.45";
 choices[2][2] = "10.2.40.63";
 choices[2][3] = "10.2.40.62";
 answers[2] = choices[2][3];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2992. ";


//  Id pregunta: 3000 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  LDAP ( Lightweght Directory Access Protocol):";
 choices[3]= new Array();
 choices[3][0] = "Surge como evoluci&oacute;n del protocolo DAP  (Directory Access Protocol). LDAP es un protocolo a nivel de aplicaci&oacute;n, por lo que tanto el cliente como el servidor deben implementar completamente la torre de protocolos OSI";
 choices[3][1] = "Surge como alternativa al DAP y utiliza TCP/IP en lugar de los protocolos OSI, lo cu&aacute;l es una ventaja ya que TCP/IP requiere menos recursos y est&aacute; m&aacute;s disponible, especialmente en ordenadores de sobremesa.";
 choices[3][2] = "Abandona el modelo cliente/servidor de implementaci&oacute;n, de modo que una aplicaci&oacute;n que desea acceder al directorio lo hace directamente contra la base de datos cuyo esquema est&aacute; disponible (ISO 9594)";
 choices[3][3] = "Es un servicio de directorio centralizado frente a los modelos distribuidos donde los datos podr&iacute;an estar fraccionados y/o replicados. As&iacute; pues con LDAP un &uacute;nico servidor da todo el servicio de directorio respondiendo a todas las consultas de los clientes";
 answers[3] = choices[3][1];
 units[3] = "106";
 comments[3] = "Id Pregunta: 3000. ";


//  Id pregunta: 3023 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Frame Relay no es el tipo de red de &aacute;rea extensa adecuada para transportar:";
 choices[4]= new Array();
 choices[4][0] = "Ficheros de datos.";
 choices[4][1] = "V&iacute;deo de tiempo real.";
 choices[4][2] = "Descarga de p&aacute;ginas web.";
 choices[4][3] = "Es adecuada para transportar cualquier tipo de tr&aacute;fico.";
 answers[4] = choices[4][1];
 units[4] = "109";
 comments[4] = "Id Pregunta: 3023. ";


//  Id pregunta: 3079 AÃ±o de creación de pregunta: 2005-01-01
 questions[5]= "6)  La inundaci&oacute;n de un buz&oacute;n de correo electr&oacute;nico con un gran n&uacute;mero de mensajes (e-mail spamming) afecta a:";
 choices[5]= new Array();
 choices[5][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[5][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[5][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[5][3] = "Las respuestas &lsquo;c&rsquo; y &lsquo;d&rsquo; son correctas";
 answers[5] = choices[5][1];
 units[5] = "111";
 comments[5] = "Id Pregunta: 3079. NULL";


//  Id pregunta: 3113 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; nivel ISO-OSI operan los bridges (puentes)?:";
 choices[6]= new Array();
 choices[6][0] = "A nivel f&iacute;sico";
 choices[6][1] = "A nivel de red";
 choices[6][2] = "A nivel de enlace";
 choices[6][3] = "A nivel de transporte";
 answers[6] = choices[6][2];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3113. NULL";


//  Id pregunta: 3142 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[7]= new Array();
 choices[7][0] = "El tama&ntilde;o m&aacute;ximo del mensaje a transmitir entre aplicaci&oacute;n origen y destino, depende del tama&ntilde;o m&aacute;ximo del paquete, que viene impuesto por la red";
 choices[7][1] = "No se puede establecer dos circuitos virtuales simult&aacute;neos entere un mismo origen y un mismo destino, ya que la red no podr&iacute;a coordinar dos n&uacute;meros de canal l&oacute;gico con un mismo destino";
 choices[7][2] = "Siempre que se reduzca el tama&ntilde;o de los paquetes, el rendimiento (bytes de informaci&oacute;n transmitidos por unidad de tiempo) disminuir&aacute;, ya que se env&iacute;an los mismo bytes de cabecera, para menos bytes de informaci&oacute;n";
 choices[7][3] = "Todas las respuestas anteriores son falsas ";
 answers[7] = choices[7][2];
 units[7] = "101";
 comments[7] = "Id Pregunta: 3142. ";


//  Id pregunta: 3166 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un protocolo de transmisi&oacute;n orientado a bit?:";
 choices[8]= new Array();
 choices[8][0] = "Para detectar el principio y el final de una trama se utiliza una secuencia de bits, llamada bandera";
 choices[8][1] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n mensajes constituidos por uno o varios caracteres, llamados de control de la comunicaci&oacute;n, tomados de un c&oacute;digo preestablecido";
 choices[8][2] = "La trama es de formato fijo, constituida por campos de longitud determinada, excepto el campo de informaci&oacute;n";
 choices[8][3] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n campos de control con bits (o grupos de bits) cuyo significado est&aacute; dado por su posici&oacute;n";
 answers[8] = choices[8][1];
 units[8] = "100, 101";
 comments[8] = "Id Pregunta: 3166. ";


//  Id pregunta: 3176 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes no es un &aacute;rea funcional en el &aacute;mbito de la gesti&oacute;n de redes OSI mediante CMIP?:";
 choices[9]= new Array();
 choices[9][0] = "Fallos";
 choices[9][1] = "Seguridad";
 choices[9][2] = "Rendimiento";
 choices[9][3] = "Control remoto";
 answers[9] = choices[9][3];
 units[9] = "104";
 comments[9] = "Id Pregunta: 3176. ";


//  Id pregunta: 3186 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes topolog&iacute;as tiene un mayor nivel de seguridad?:";
 choices[10]= new Array();
 choices[10][0] = "Bus";
 choices[10][1] = "Anillo";
 choices[10][2] = "Estrella";
 choices[10][3] = "Las 3 anteriores topolog&iacute;as tienen un nivel de seguridad similar";
 answers[10] = choices[10][2];
 units[10] = "111";
 comments[10] = "Id Pregunta: 3186. NULL";


//  Id pregunta: 3217 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El est&aacute;ndar de ITU-T Q.931 trata sobre:";
 choices[11]= new Array();
 choices[11][0] = "compresi&oacute;n de datos";
 choices[11][1] = "multiplexaci&oacute;n de conexiones";
 choices[11][2] = "se&ntilde;alizaci&oacute;n ";
 choices[11][3] = "codecs de audio y video";
 answers[11] = choices[11][2];
 units[11] = "97";
 comments[11] = "Id Pregunta: 3217. NULL";


//  Id pregunta: 3227 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de encaminamiento o enrutamiento?:";
 choices[12]= new Array();
 choices[12][0] = "OSPF";
 choices[12][1] = "RIP";
 choices[12][2] = "ORP";
 choices[12][3] = "IS-IS";
 answers[12] = choices[12][2];
 units[12] = "102";
 comments[12] = "Id Pregunta: 3227. ";


//  Id pregunta: 3254 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;ntas subredes son posibles en una red de clase C, con una m&aacute;scara de subnet de 255.255.255.224?:";
 choices[13]= new Array();
 choices[13][0] = "32";
 choices[13][1] = "30";
 choices[13][2] = "8";
 choices[13][3] = "6";
 answers[13] = choices[13][2];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3254. Se usa la f&oacute;rmula 2^N=Y, siendo N el n&uacute;mero de bits ocupados seg&uacute;n la m&aacute;scara, correspodientes a la asignaci&oacute;n por defecto para Host (en este caso  224=11100000 2^3=8)";


//  Id pregunta: 3255 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;ntos bytes ocupa la cabecera m&iacute;nima en IPv4?";
 choices[14]= new Array();
 choices[14][0] = "16";
 choices[14][1] = "20";
 choices[14][2] = "24";
 choices[14][3] = "32";
 answers[14] = choices[14][1];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3255. ";


//  Id pregunta: 3278 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Qu&eacute; define la norma X.400?:";
 choices[15]= new Array();
 choices[15][0] = "Sistema de tratamiento de alarmas";
 choices[15][1] = "Sistema de tratamiento de mensajes";
 choices[15][2] = "Sistema de transferencia de ficheros";
 choices[15][3] = "Sistema de gesti&oacute;n de red";
 answers[15] = choices[15][1];
 units[15] = "106";
 comments[15] = "Id Pregunta: 3278. ";


//  Id pregunta: 3347 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es una debilidad de las redes inal&aacute;mbricas frente a otro tipo de redes?:";
 choices[16]= new Array();
 choices[16][0] = "Poca seguridad";
 choices[16][1] = "Escasa protecci&oacute;n frente a interferencias";
 choices[16][2] = "Precio elevado";
 choices[16][3] = "Cobertura limitada";
 answers[16] = choices[16][2];
 units[16] = "107";
 comments[16] = "Id Pregunta: 3347. NULL";


//  Id pregunta: 3383 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El MIB est&aacute;ndar o MIB-I se complet&oacute; con:";
 choices[17]= new Array();
 choices[17][0] = "MIB-2";
 choices[17][1] = "MIB-II";
 choices[17][2] = "Con la RFC 1213";
 choices[17][3] = "La 'b' y la 'c' son correctas";
 answers[17] = choices[17][3];
 units[17] = "104";
 comments[17] = "Id Pregunta: 3383. ";


//  Id pregunta: 3433 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Indique cu&aacute;l de las opciones siguientes es verdadera respecto al acceso al medio en redes LAN:";
 choices[18]= new Array();
 choices[18][0] = "Si la estaci&oacute;n que utiliza el medio, cuando finaliza su uso lo cede a la siguiente que lo necesita, se denomina Token Passing";
 choices[18][1] = "Las redes que siguen un protocolo de acceso al medio consistente en que la estaci&oacute;n que lo requiere, observa hasta que no existe actividad en el mismo, en ese momento accede y observa que no colisiona con ninguna otra estaci&oacute;n, utilizan CSMA";
 choices[18][2] = "En las redes con protocolo Token Passing se puede determinar el tiempo m&aacute;ximo en que una estaci&oacute;n acceder al medio. En las redes con CSMA solo se puede estimar este tiempo";
 choices[18][3] = "Todas las respuestas anteriores son correctas";
 answers[18] = choices[18][3];
 units[18] = "101";
 comments[18] = "Id Pregunta: 3433. ";


//  Id pregunta: 3492 AÃ±o de creación de pregunta: 2005-01-01
 questions[19]= "20)  En el &aacute;mbito de la seguridad de redes, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[19]= new Array();
 choices[19][0] = "Los ataques de &quot;buffer overflow&quot; son posibles debido a fallos de programaci&oacute;n";
 choices[19][1] = "Los ataques mediante &quot;spoofing&quot; se basan en la generaci&oacute;n de paquetes de informaci&oacute;n falsa";
 choices[19][2] = "NIS, NFS, DNS o SMTP son protocolos de aplicaci&oacute;n inseguros";
 choices[19][3] = "Los ataques mediante &quot;secuestro de sesi&oacute;n&quot; no pueden prevenirse en la labor de administraci&oacute;n";
 answers[19] = choices[19][3];
 units[19] = "111";
 comments[19] = "Id Pregunta: 3492. NULL";


//  Id pregunta: 3513 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el protocolo IPv6:";
 choices[20]= new Array();
 choices[20][0] = "El campo 'Traffic Class' tiene 8 bits de longitud";
 choices[20][1] = "El campo 'Priority' tiene 8 bits de longitud";
 choices[20][2] = "El campo 'Header CheckSum' tiene 8 bits de longitud";
 choices[20][3] = "El campo 'TOS' indica el tipo de servicio";
 answers[20] = choices[20][0];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3513. NULL";


//  Id pregunta: 3514 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En el protocolo IPv6:";
 choices[21]= new Array();
 choices[21][0] = "El campo 'Hop Limit' es similar al TTL en IP v4";
 choices[21][1] = "Los campos de direcciones tienen 128 bits de longitud";
 choices[21][2] = "No existe ning&uacute;n campo CRC de cabecera";
 choices[21][3] = "Todas las anteriores respuestas son correctas";
 answers[21] = choices[21][3];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3514. NULL";


//  Id pregunta: 3546 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En notaci&oacute;n Kendall A/B/X/Y/Z: ";
 choices[22]= new Array();
 choices[22][0] = "X especifica el n&uacute;mero de servidores.";
 choices[22][1] = "Y especifica la capacidad del sistema.";
 choices[22][2] = "Ninguna de las anteriores es v&aacute;lida.";
 choices[22][3] = "Las respuestas 'a' y 'b' son ciertas.";
 answers[22] = choices[22][3];
 units[22] = "";
 comments[22] = "Id Pregunta: 3546. Kendall T&ordm; Colas";


//  Id pregunta: 3572 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En una comunicaci&oacute;n v&iacute;a radio entre el m&oacute;vil y la estaci&oacute;n base:";
 choices[23]= new Array();
 choices[23][0] = "El enlace ascendente es del m&oacute;vil a la estaci&oacute;n base";
 choices[23][1] = "El enlace descendente es de la estaci&oacute;n base al m&oacute;vil";
 choices[23][2] = "Las 2 respuestas anteriores son correctas";
 choices[23][3] = "Las respuestas 'a'y 'b' son incorrectas";
 answers[23] = choices[23][2];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3572. ";


//  Id pregunta: 3607 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La frecuencia de transmisi&oacute;n en MHz de M&oacute;vil a Estaci&oacute;n Base ('uplink') en GSM es:";
 choices[24]= new Array();
 choices[24][0] = "890-915";
 choices[24][1] = "800-825";
 choices[24][2] = "790-815";
 choices[24][3] = "960-985";
 answers[24] = choices[24][0];
 units[24] = "108";
 comments[24] = "Id Pregunta: 3607. ";


//  Id pregunta: 3613 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La ITU-T ha recogido en diversas recomendaciones la forma en que un terminal as&iacute;ncrono puede acceder a una red de conmutaci&oacute;n de paquetes. El conjunto de estas normas se conoce como la triple X. Indique cual de las siguientes opciones es verdadera:";
 choices[25]= new Array();
 choices[25][0] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[25][1] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica la forma el terminal de paquetes remoto puede controlar los par&aacute;metros del Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblado";
 choices[25][2] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[25][3] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.25 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal  con el Ensamblador\Desensamblador de Paquetes; y la X.7";
 answers[25] = choices[25][2];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3613. ";


//  Id pregunta: 3659 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Un control Active X:";
 choices[26]= new Array();
 choices[26][0] = "S&oacute;lo se pueden escribir en Java";
 choices[26][1] = "S&oacute;lo se pueden ejecutar en sistemas Windows/Intel";
 choices[26][2] = "S&oacute;lo pueden acceder a funciones dentro del contenedor en el que se ejecutan";
 choices[26][3] = "S&oacute;lo se pueden escribir en C/C++";
 answers[26] = choices[26][1];
 units[26] = "115";
 comments[26] = "Id Pregunta: 3659. NULL";


//  Id pregunta: 3665 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Un servidor &quot;proxy&quot;:";
 choices[27]= new Array();
 choices[27][0] = "Sirve para traducir direcciones IP";
 choices[27][1] = "Act&uacute;a de intermediario, para acceder a determinados servicios de forma indirecta";
 choices[27][2] = "Permite acceder a cualquier servicio de internet, actuando de intermediario";
 choices[27][3] = "Sirve para realizar pagos on-line";
 answers[27] = choices[27][1];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3665. NULL";


//  Id pregunta: 3681 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico mediante redes de sat&eacute;lites:";
 choices[28]= new Array();
 choices[28][0] = "Se regula de acuerdo al derecho p&uacute;blico";
 choices[28][1] = "Se regula mediante derecho internacional";
 choices[28][2] = "Su gesti&oacute;n no puede darse en concesi&oacute;n";
 choices[28][3] = "Ninguna de las anteriores respuestas es correcta ";
 answers[28] = choices[28][1];
 units[28] = "110";
 comments[28] = "Id Pregunta: 3681. ";


//  Id pregunta: 3705 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Las siglas UTP corresponden a:";
 choices[29]= new Array();
 choices[29][0] = "Cable coaxial fino";
 choices[29][1] = "Cable coaxial grueso";
 choices[29][2] = "Fibra &oacute;ptica sin apantallar";
 choices[29][3] = "Par trenzado sin apantallar";
 answers[29] = choices[29][3];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3705. ";


//  Id pregunta: 3739 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los puentes transparentes:";
 choices[30]= new Array();
 choices[30][0] = "Son lo mismo que los puentes 'Source Routing'";
 choices[30][1] = "Eliminan la direcci&oacute;n origen de cada trama que reciben";
 choices[30][2] = "No existen";
 choices[30][3] = "Aprenden las direcciones MAC de cada trama recibida y las guardan temporalmente, asoci&aacute;ndolas a un puerto.";
 answers[30] = choices[30][3];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3739. ";


//  Id pregunta: 3763 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Para la conmutaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la ventaja de tener una latencia menor";
 choices[31][1] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la desventaja de transmitir paquetes err&oacute;neos";
 choices[31][2] = "La t&eacute;cnica &quot;store and fordward&quot; tiene las caracter&iacute;sticas opuestas a &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[31][3] = "Todas las afirmaciones anteriores son correctas";
 answers[31] = choices[31][3];
 units[31] = "102";
 comments[31] = "Id Pregunta: 3763. ";


//  Id pregunta: 3773 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  PLC responde por:";
 choices[32]= new Array();
 choices[32][0] = "Power Limit Consumption";
 choices[32][1] = "Priority Lock Change";
 choices[32][2] = "Power Line Communication";
 choices[32][3] = "Protocol Link Conmutation";
 answers[32] = choices[32][2];
 units[32] = "107";
 comments[32] = "Id Pregunta: 3773. NULL";


//  Id pregunta: 3797 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto al interfaz Centronics, no es cierto que:";
 choices[33]= new Array();
 choices[33][0] = "es un interfaz paralelo, unidireccional y as&iacute;ncrono";
 choices[33][1] = "es el interfaz tradicionalmente utilizado con las impresoras";
 choices[33][2] = "el cable lleva por un lado un conector DB-25 para el PC y por otro el conector de 36 pines para el perif&eacute;rico";
 choices[33][3] = "Todas las respuestas anteriores son ciertas";
 answers[33] = choices[33][3];
 units[33] = "48";
 comments[33] = "Id Pregunta: 3797. ";


//  Id pregunta: 3884 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[34]= new Array();
 choices[34][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[34][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[34][2] = " Especificaci&oacute;n de medio 10BASE-T.";
 choices[34][3] = " Especificaci&oacute;n de medio 10BROAD36.";
 answers[34] = choices[34][0];
 units[34] = "99";
 comments[34] = "Id Pregunta: 3884. Junta Andaluc&iacute;a";


//  Id pregunta: 3903 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Sobre ADSL es cierto que:";
 choices[35]= new Array();
 choices[35][0] = "No es compatible con RDSI";
 choices[35][1] = "Las portadoras que usa ADSL se modulan en cuadratura";
 choices[35][2] = "Los organismos de estandarizaci&oacute;n se han decantado por la t&eacute;cnica de modulaci&oacute;n CAP para ADSL";
 choices[35][3] = "ADSL opera en un margen defrecuencias que llega hasta los 20 KHz";
 answers[35] = choices[35][1];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3903. Compatible con RDSI seg&uacute;n anexo B. CAP utiliza modulaci&oacute;n QAM en canal de bajada.";


//  Id pregunta: 3957 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La especificaci&oacute;n H.323:";
 choices[36]= new Array();
 choices[36][0] = "Ha sido creada por la ISO, y define un conjunto de protocolos para transmitir voz, video y datos sobre IP";
 choices[36][1] = "Emplea a su vez otras especificaciones, como H.225 y H.245";
 choices[36][2] = "Hace uso del protocolo RTP para establecer las llamadas sobre la red IP";
 choices[36][3] = "Las respuestas b) y c) son correctas";
 answers[36] = choices[36][1];
 units[36] = "107";
 comments[36] = "Id Pregunta: 3957. NULL";


//  Id pregunta: 3966 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Respecto de Java y JavaScript se puede decir";
 choices[37]= new Array();
 choices[37][0] = "Los dos son lenguajes interpretados";
 choices[37][1] = "Java es compilado en tiempo de ejecuci&oacute;n y JavaScript interpretado                                                           ";
 choices[37][2] = "JavaScript es compilado en tiempo de ejecuci&oacute;n y Java interpretado";
 choices[37][3] = "Ambos son compilados";
 answers[37] = choices[37][1];
 units[37] = "114";
 comments[37] = "Id Pregunta: 3966. ";


//  Id pregunta: 3994 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En relaci&oacute;n a la gesti&oacute;n de red (se&ntilde;ale la falsa):";
 choices[38]= new Array();
 choices[38][0] = "Los modelos de gesti&oacute;n se pueden clasificar seg&uacute;n el grado de descentralizaci&oacute;n, el dominio, el grado de heterogeneidad y la jerarqu&iacute;a organizativa";
 choices[38][1] = "El est&aacute;ndar de OSI es SNMP (Symple Network Management Protocol)";
 choices[38][2] = "CMIP y SNMP utilizan MIB";
 choices[38][3] = "Todas son verdaderas";
 answers[38] = choices[38][1];
 units[38] = "104";
 comments[38] = "Id Pregunta: 3994. ";


//  Id pregunta: 4030 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El modelo de referencia de ATM involucra tres planos independientes denominados:";
 choices[39]= new Array();
 choices[39][0] = "Plano de usuario, plano de gesti&oacute;n y plano de administraci&oacute;n.";
 choices[39][1] = "Plano de informaci&oacute;n, plano de gesti&oacute;n y plano de administraci&oacute;n.";
 choices[39][2] = "Plano de usuario, plano de control y plano de administraci&oacute;n.";
 choices[39][3] = "Plano de informaci&oacute;n, plano de control y plano de gesti&oacute;n.";
 answers[39] = choices[39][2];
 units[39] = "109";
 comments[39] = "Id Pregunta: 4030. ";


//  Id pregunta: 4032 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;En qu&eacute; recomendaci&oacute;n se define el protocolo LAPF de Frame Relay?";
 choices[40]= new Array();
 choices[40][0] = "Q. 923";
 choices[40][1] = "Q. 920";
 choices[40][2] = "Q. 921";
 choices[40][3] = "Q. 922";
 answers[40] = choices[40][3];
 units[40] = "109";
 comments[40] = "Id Pregunta: 4032. ";


//  Id pregunta: 4081 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Un proxy o apoderado permite";
 choices[41]= new Array();
 choices[41][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[41][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[41][2] = "traducir las direcciones internas a externas y viceversa";
 choices[41][3] = "Todas  las respuestas son correctas";
 answers[41] = choices[41][3];
 units[41] = "113";
 comments[41] = "Id Pregunta: 4081. ";


//  Id pregunta: 4120 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El lugar de almacenamiento temporal de las im&aacute;genes descargadas desde una p&aacute;gina Web se llama";
 choices[42]= new Array();
 choices[42][0] = "RAM";
 choices[42][1] = "disco duro";
 choices[42][2] = "cookie";
 choices[42][3] = "cache";
 answers[42] = choices[42][3];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4120. ";


//  Id pregunta: 4182 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[43]= new Array();
 choices[43][0] = "RJ11 de 6 contactos";
 choices[43][1] = "RJ45 de 6 contactos";
 choices[43][2] = "RJ45 de 8 contactos";
 choices[43][3] = "RJ49 para cables STP";
 answers[43] = choices[43][2];
 units[43] = "99";
 comments[43] = "Id Pregunta: 4182. ";


//  Id pregunta: 4192 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Pueden encontrarse registros SOA, NS, CNAME, MX, etc. en el contexto de";
 choices[44]= new Array();
 choices[44][0] = "Un Servicio Web";
 choices[44][1] = "Una Arquitectura Orientada a Servicios (SOA)";
 choices[44][2] = "Un servidor DNS";
 choices[44][3] = "Unos identificadores XML de un servicio RSS";
 answers[44] = choices[44][2];
 units[44] = "106";
 comments[44] = "Id Pregunta: 4192. ";


//  Id pregunta: 4197 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  El estandar 802.11k se centra en";
 choices[45]= new Array();
 choices[45][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[45][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[45][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[45][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[45] = choices[45][3];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4197. NULL";


//  Id pregunta: 4217 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece a la capa de aplicaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "NFS";
 choices[46][1] = "SMTP";
 choices[46][2] = "RPC";
 choices[46][3] = "UDP";
 answers[46] = choices[46][3];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4217. ";


//  Id pregunta: 4508 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Un organismo europeo de normalizaci&oacute;n, tiene como misi&oacute;n producir normas de telecomunicaciones para hoy y para el futuro. Sus siglas son:";
 choices[47]= new Array();
 choices[47][0] = "ETSI.";
 choices[47][1] = "CEN";
 choices[47][2] = "CENELEC";
 choices[47][3] = "CEPT";
 answers[47] = choices[47][0];
 units[47] = "42";
 comments[47] = "Id Pregunta: 4508. ";


//  Id pregunta: 4592 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Cual de las siguientes no es una ventaja de WiMax respecto a WIFI:";
 choices[48]= new Array();
 choices[48][0] = "el ancho los canales radio utilizados por WiMax es menor que los de WiFi";
 choices[48][1] = "WiMax utiliza un protocolo de control de acceso al medio CSMA evolucionado respecto al de WiFi";
 choices[48][2] = "WiMax soporta mas usuarios por cada canal radio";
 choices[48][3] = "WiMax permite el control autom&aacute;tico de potencia emitida";
 answers[48] = choices[48][1];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4592. NULL";


//  Id pregunta: 4816 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN(Gateway GPRS Support Node)?";
 choices[49]= new Array();
 choices[49][0] = "La gesti&oacute;n de la movilidad";
 choices[49][1] = "El cifrado y autenticaci&oacute;n";
 choices[49][2] = "La conexi&oacute;n al HLR (Home Location Register)";
 choices[49][3] = "La conexi&oacute;n a los ISP (Internet Service Provider)";
 answers[49] = choices[49][3];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4816. ";


//  Id pregunta: 5009 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (TransmissionControl Protocol/Internet Protocol)?";
 choices[50]= new Array();
 choices[50][0] = "PGR";
 choices[50][1] = "SMTP";
 choices[50][2] = "ICMP";
 choices[50][3] = "SNMP";
 answers[50] = choices[50][3];
 units[50] = "104";
 comments[50] = "Id Pregunta: 5009. Examen TIC A 2007";


//  Id pregunta: 5018 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[51]= new Array();
 choices[51][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet";
 choices[51][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet";
 choices[51][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree)";
 choices[51][3] = "De la especificaci&oacute;n 1000Base-T";
 answers[51] = choices[51][1];
 units[51] = "101";
 comments[51] = "Id Pregunta: 5018. Examen TIC A 2007";


//  Id pregunta: 5164 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Seg&uacute;n el Plan T&eacute;cnico Nacional de la Radiodifusi&oacute;n Sonora Digital Terrenal, cada bloque de frecuencias (de 1,536 MHz) integrar&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Al menos cuatro programas diferentes";
 choices[52][1] = "Un &uacute;nico programa";
 choices[52][2] = "Tantos programas diferentes como estime el concesionario";
 choices[52][3] = "Al menos seis programas diferentes";
 answers[52] = choices[52][3];
 units[52] = "105";
 comments[52] = "Id Pregunta: 5164. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5289 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G a la generaci&oacute;n 2.5G ha requerido la realizaci&oacute;n de inversiones:";
 choices[53]= new Array();
 choices[53][0] = "En el acceso radio";
 choices[53][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[53][2] = "No fue necesario modificar la infraestructura existente.";
 choices[53][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[53] = choices[53][1];
 units[53] = "108";
 comments[53] = "Id Pregunta: 5289. ";


//  Id pregunta: 5514 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[54]= new Array();
 choices[54][0] = "Mediante un cable cruzado";
 choices[54][1] = "Mediante un cable sin cruzar o cable plano";
 choices[54][2] = "Mediante un dado de interconexi&oacute;n";
 choices[54][3] = "Mediante cualquiera de las tres opciones indicadas ";
 answers[54] = choices[54][0];
 units[54] = "99";
 comments[54] = "Id Pregunta: 5514. ";


//  Id pregunta: 5563 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el protoloc IPv6, &iquest;cu&aacute;l ser&iacute;a la primera cabecera adicional despu&eacute;s de la cabecera IPv6?";
 choices[55]= new Array();
 choices[55][0] = "Cualquiera, no llevan un orden determinado";
 choices[55][1] = "Cabecera salto a salto";
 choices[55][2] = "Cabecera de autenticaci&oacute;n";
 choices[55][3] = "Cabecera de encaminamiento";
 answers[55] = choices[55][1];
 units[55] = "100";
 comments[55] = "Id Pregunta: 5563. ";


//  Id pregunta: 5936 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de estas afirmaciones es cierta con respecto al hypervisor de la herramienta de virtualizaci&oacute;n Xen?";
 choices[56]= new Array();
 choices[56][0] = "Los kernels que incorporan por defecto las distribuciones populares como Debian y Red Hat pueden realizar la funci&oacute;n de hypervisor de Xen.";
 choices[56][1] = "Para que un kernel gen&eacute;rico de Debian o Red Hat puede realizar la funci&oacute;n de hypervisor debemos cargar m&oacute;dulos espec&iacute;ficos en el arranque del sistema.";
 choices[56][2] = "En funci&oacute;n del tipo que sistema operativo que vayamos a alojar como hu&eacute;sped deberemos o no cargar m&oacute;dulos espec&iacute;ficos del kernel por defecto de Debian o Red Hat para que &eacute;ste realice la funci&oacute;n de hypervisor.";
 choices[56][3] = "El hypervisor de Xen es un kernel de Linux especial que debemos instalar, puesto que el kernel por defecto de Debian o Red Hat no puede realizar esas tareas.";
 answers[56] = choices[56][3];
 units[56] = "119";
 comments[56] = "Id Pregunta: 5936. ";


//  Id pregunta: 5978 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La banda de 26 GHz se utiliza para:";
 choices[57]= new Array();
 choices[57][0] = "UMTS.";
 choices[57][1] = "LMDS.";
 choices[57][2] = "WiFi.";
 choices[57][3] = "Bluetooth.";
 answers[57] = choices[57][1];
 units[57] = "107";
 comments[57] = "Id Pregunta: 5978. TIC A 2009";


//  Id pregunta: 6059 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Los servicios web son:";
 choices[58]= new Array();
 choices[58][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[58][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[58][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[58][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[58] = choices[58][3];
 units[58] = "51,69";
 comments[58] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6090 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[59]= new Array();
 choices[59][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[59][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[59][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[59][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[59] = choices[59][3];
 units[59] = "100";
 comments[59] = "Id Pregunta: 6090. TIC A 2009";


//  Id pregunta: 6227 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En relaci&oacute;n a la Java Native Interface, cu&aacute;l de las siguientes opciones es correcta:";
 choices[60]= new Array();
 choices[60][0] = "Todas las aplicaciones y applets pueden invocar la JNI";
 choices[60][1] = "Las aplicaciones pierden una de las caracter&iacute;sticas m&aacute;s importantes que Java le confiere, su portabilidad";
 choices[60][2] = "JNI mantiene la recolecci&oacute;n de basura en el c&oacute;digo incorporado";
 choices[60][3] = "JNI es una API de Java para acceder a servicios de procesos remotos";
 answers[60] = choices[60][1];
 units[60] = "116";
 comments[60] = "Id Pregunta: 6227. TICB-2009, bloque desarrollo";


//  Id pregunta: 7285 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &quot;La t&eacute;cnica de  virtualizaci&oacute;n de infraestructura TIC denominada &quot;&quot;paravirtualizaci&oacute;n&quot;&quot;, pone &eacute;nfasis (comparado con la virtualizaci&oacute;n &quot;&quot;normal&quot;&quot;) en:&quot;";
 choices[61]= new Array();
 choices[61][0] = "Compatibilidad e interoperabilidad";
 choices[61][1] = "Rendimiento";
 choices[61][2] = "Costes";
 choices[61][3] = "Inteligencia arti&iexcl;ficial";
 answers[61] = choices[61][1];
 units[61] = "119";
 comments[61] = "Id Pregunta: 7285. Examen TIC B 2009";


//  Id pregunta: 7286 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[62]= new Array();
 choices[62][0] = "Sindicaci&oacute;n de contenidos";
 choices[62][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[62][2] = "P&aacute;ginas personales";
 choices[62][3] = "Directorios (taxonom&iacute;as)";
 answers[62] = choices[62][0];
 units[62] = "120";
 comments[62] = "Id Pregunta: 7286. Examen TIC B 2009";


//  Id pregunta: 8444 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[63]= new Array();
 choices[63][0] = "FTP.";
 choices[63][1] = "TFTP.";
 choices[63][2] = "DNS.";
 choices[63][3] = "Ninguno de los anteriores.";
 answers[63] = choices[63][2];
 units[63] = "100";
 comments[63] = "Id Pregunta: 8444. Analista Ayto. Madrid 2010";


//  Id pregunta: 8453 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Un puente se caracteriza por:";
 choices[64]= new Array();
 choices[64][0] = "Operar en capa 3 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[64][1] = "Opera en capa 2 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[64][2] = "Operar en capa 3 del modelo OSI y utiliza direcciones IP para tomar decisiones";
 choices[64][3] = "Operar en capa 4 del modelo OSI y utiliza puertos TCP para tomar decisiones";
 answers[64] = choices[64][1];
 units[64] = "102";
 comments[64] = "Id Pregunta: 8453. Analista Ayto. Madrid 2010";


//  Id pregunta: 8536 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[65]= new Array();
 choices[65][0] = "10,8 Mbps te&oacute;ricos.";
 choices[65][1] = "14 Mbps";
 choices[65][2] = "2 Mbps";
 choices[65][3] = "384 Kbps";
 answers[65] = choices[65][1];
 units[65] = "108";
 comments[65] = "Id Pregunta: 8536. Examen TIC A2 2010 interna";


//  Id pregunta: 8662 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[66]= new Array();
 choices[66][0] = "Agente de usuario";
 choices[66][1] = "Servidor proxy";
 choices[66][2] = "Agente de usuario inverso";
 choices[66][3] = "Agente proxy";
 answers[66] = choices[66][3];
 units[66] = "109";
 comments[66] = "Id Pregunta: 8662. Examen UPM A2 2011";


//  Id pregunta: 8872 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  HDLC define tres tipos de estaciones, dos configuraciones de enlace y tres modos de operaci&oacute;n para la transferencia de los datos. Se&ntilde;ale la respuesta correcta en relaci&oacute;n a dichas definiciones:";
 choices[67]= new Array();
 choices[67][0] = "La Configuraci&oacute;n de Enlace no Balanceada est&aacute; formada por una estaci&oacute;n primaria y una o m&aacute;s estaciones secundarias y &uacute;nicamente se permite la transmisi&oacute;n semi-duplex";
 choices[67][1] = "El modo de respuesta normal (NRM) se utiliza en la configuraci&oacute;n no balanceada";
 choices[67][2] = "El modo de respuesta as&iacute;ncrono (ARM) se utiliza en la configuraci&oacute;n balanceada.";
 choices[67][3] = "Solamente existen dos tipos de estaciones, primaria y secundaria";
 answers[67] = choices[67][1];
 units[67] = "100";
 comments[67] = "Id Pregunta: 8872. Analista Ayto. Madrid 2010";


//  Id pregunta: 8886 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; Informaci&oacute;n contiene una SIM?";
 choices[68]= new Array();
 choices[68][0] = "IMSI";
 choices[68][1] = "PIN";
 choices[68][2] = "OMC";
 choices[68][3] = "La respuesta A y B son correctas";
 answers[68] = choices[68][3];
 units[68] = "108";
 comments[68] = "Id Pregunta: 8886. ";


//  Id pregunta: 8887 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes no es tipo de primitiva?";
 choices[69]= new Array();
 choices[69][0] = "Received";
 choices[69][1] = "Indication";
 choices[69][2] = "Response";
 choices[69][3] = "Request";
 answers[69] = choices[69][0];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8887. ";


//  Id pregunta: 8906 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[70]= new Array();
 choices[70][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[70][1] = "UTP Categor&iacute;a 3.";
 choices[70][2] = "UTP Categor&iacute;a 5.";
 choices[70][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[70] = choices[70][2];
 units[70] = "99, 101";
 comments[70] = "Id Pregunta: 8906. Operador Ayto. Madrid 2010";


//  Id pregunta: 8995 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El protocolo SSL (Secure Sockets Layer)";
 choices[71]= new Array();
 choices[71][0] = "Proporciona conexiones seguras s&oacute;lo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[71][1] = "No garantiza la integridad de la informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[71][2] = "Es una capa de seguridad que opera siempre sobre protocolo UDP.";
 choices[71][3] = "Proporciona conexiones seguras sobre una red insegura garantizando la integridad de los datos transmitidos, privacidad de la conexi&oacute;n y autentificaci&oacute;n del cliente y servidor.";
 answers[71] = choices[71][3];
 units[71] = "111";
 comments[71] = "Id Pregunta: 8995. Examen UPM A2 2011";


//  Id pregunta: 9326 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[72]= new Array();
 choices[72][0] = "clase D";
 choices[72][1] = "clase F ";
 choices[72][2] = "clase E";
 choices[72][3] = "b) y c) son correctas.";
 answers[72] = choices[72][3];
 units[72] = "99";
 comments[72] = "Id Pregunta: 9326. NULL";


//  Id pregunta: 9357 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[73]= new Array();
 choices[73][0] = "Fibra 62.5/125 um";
 choices[73][1] = "Fibra 50/125 um";
 choices[73][2] = "Fibra 200/380 um ";
 choices[73][3] = "Fibra 10/125 um";
 answers[73] = choices[73][3];
 units[73] = "99";
 comments[73] = "Id Pregunta: 9357. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";


//  Id pregunta: 9373 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  El protocolo de nivel 2 utilizado en una l&iacute;nea punto a punto con Jerarqu&iacute;a Digital S&iacute;ncrona es:";
 choices[74]= new Array();
 choices[74][0] = "PPP";
 choices[74][1] = "LAPB";
 choices[74][2] = "L2TP";
 choices[74][3] = "L2F";
 answers[74] = choices[74][0];
 units[74] = "101";
 comments[74] = "Id Pregunta: 9373. ";


//  Id pregunta: 9431 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Una de las siguientes no es una funci&oacute;n de la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[75]= new Array();
 choices[75][0] = "Arbitrar en los conflictos que puedan surgir entre los operadores del sector de las comunicaciones electr&oacute;nicas";
 choices[75][1] = "Definir y analizar los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas";
 choices[75][2] = "Determinar la cuant&iacute;a que supone el coste neto en la prestaci&oacute;n del servicio universal";
 choices[75][3] = "La creaci&oacute;n de un plan de numeraci&oacute;n";
 answers[75] = choices[75][3];
 units[75] = "110";
 comments[75] = "Id Pregunta: 9431. ";


//  Id pregunta: 9495 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a Javascript:";
 choices[76]= new Array();
 choices[76][0] = "Es un extensi&oacute;n de Java";
 choices[76][1] = "Es un extensi&oacute;n de HTML";
 choices[76][2] = "Es un lenguaje interpretado";
 choices[76][3] = "El int&eacute;rprete de JavaScript se basa en el est&aacute;ndar ECMAScript";
 answers[76] = choices[76][0];
 units[76] = "114";
 comments[76] = "Id Pregunta: 9495. NULL";


//  Id pregunta: 9856 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Un programa malicioso capaz de alojarse en computadoras y permitir el acceso a usuarios externos, a trav&eacute;s de una red local o de Internet, con el fin de recabar informaci&oacute;n o controlar remotamente a la m&aacute;quina anfitriona, se denomina: ";
 choices[77]= new Array();
 choices[77][0] = "Un caballo de Troya.";
 choices[77][1] = "Un virus.";
 choices[77][2] = "Un gusano.";
 choices[77][3] = "El tal&oacute;n de Aquiles.";
 answers[77] = choices[77][0];
 units[77] = "111";
 comments[77] = "Id Pregunta: 9856. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9894 AÃ±o de creación de pregunta: 2010-01-01
 questions[78]= "79)  Ordene de forma decreciente, en relaci&oacute;n al coste en hardware (puertas l&oacute;gicasequivalentes), las siguientes primitivas criptogr&aacute;ficas: funci&oacute;n resumen (ej. MD5 o SHA-1), cifrado asim&eacute;trico (ej. RSA o curvas el&iacute;pticas) y cifrado sim&eacute;trico (ej. AES o DES).";
 choices[78]= new Array();
 choices[78][0] = "Funci&oacute;n resumen, Cifrado asim&eacute;trico, Cifrado sim&eacute;trico.";
 choices[78][1] = "Funci&oacute;n resumen, Cifrado sim&eacute;trico, Cifrado asim&eacute;trico.";
 choices[78][2] = "Cifrado asim&eacute;trico, Cifrado sim&eacute;trico, Funci&oacute;n resumen.";
 choices[78][3] = "Cifrado asim&eacute;trico, Funci&oacute;n resumen, Cifrado sim&eacute;trico.";
 answers[78] = choices[78][3];
 units[78] = "111";
 comments[78] = "Id Pregunta: 9894. TIC A1, Examen 2013";


//  Id pregunta: 10067 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[79]= new Array();
 choices[79][0] = "Web 3.0. ";
 choices[79][1] = "Labelling.";
 choices[79][2] = "Taxonom&iacute;a.";
 choices[79][3] = "Folcsonom&iacute;a.";
 answers[79] = choices[79][3];
 units[79] = "120";
 comments[79] = "Id Pregunta: 10067. TIC A2, libre, Examen 2013";


//  Id pregunta: 10195 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[80]= new Array();
 choices[80][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[80][1] = "No permite la modalidad sim&eacute;trica";
 choices[80][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central ";
 choices[80][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[80] = choices[80][1];
 units[80] = "107";
 comments[80] = "Id Pregunta: 10195. NULL";


//  Id pregunta: 10316 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[81]= new Array();
 choices[81][0] = "4 bytes.";
 choices[81][1] = "6 bytes.";
 choices[81][2] = "12 bytes.";
 choices[81][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[81] = choices[81][0];
 units[81] = "101";
 comments[81] = "Id Pregunta: 10316. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10447 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)   Indique la opci&oacute;n verdadera.";
 choices[82]= new Array();
 choices[82][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[82][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[82][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[82][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps. ";
 answers[82] = choices[82][3];
 units[82] = "103";
 comments[82] = "Id Pregunta: 10447. Examen TIC A1 2013";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En relaci&oacute;n a una red privada virtual (VPN, Virtual Private Network), es FALSO que ";
 choices[83]= new Array();
 choices[83][0] = "una VPN permite utilizar la red p&uacute;blica de un operador para construir una red privada dedicada, con funcionalidades de red y de seguridad equivalentes a las que se obtienen con una red privada. ";
 choices[83][1] = "en la actualidad, el concepto de VPN se extiende para incluir las soluciones que permiten el acceso remoto de un equipo a la red de una organizaci&oacute;n a trav&eacute;s de redes p&uacute;blicas, especialmente Internet, mediante la utilizaci&oacute;n de mecanismos de t&uacute;nel y cifrado. ";
 choices[83][2] = "el protocolo MPLS (Multiprotocol Label Switching) permite crear VPNs de nivel 4, utilizando como tecnolog&iacute;as de acceso T1/E1, ATM &oacute; Frame Relay. ";
 choices[83][3] = "VPLS (Virtual Private LAN Switching) es un servicio de red LAN privada virtual, que permite entregar tramas de nivel 2 directamente entre sedes remotas de un mismo organismo  ";
 answers[83] = choices[83][2];
 units[83] = "111";
 comments[83] = "Id Pregunta: 10449. Examen TIC A1 2013";


//  Id pregunta: 10803 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Se&ntilde;ale qu&eacute; n&uacute;mero de puerto deber&iacute;a usarse si se quiere configurar un servicio para la autenticaci&oacute;n de redes Kerberos:";
 choices[84]= new Array();
 choices[84][0] = "88";
 choices[84][1] = "42";
 choices[84][2] = "74";
 choices[84][3] = "105";
 answers[84] = choices[84][0];
 units[84] = "111";
 comments[84] = "Id Pregunta: 10803. Examen GSI 2014";


//  Id pregunta: 10882 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[85]= new Array();
 choices[85][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[85][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[85][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[85][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[85] = choices[85][2];
 units[85] = "100";
 comments[85] = "Id Pregunta: 10882. Examen GSI 2014";


//  Id pregunta: 10963 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[86]= new Array();
 choices[86][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[86][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[86][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[86][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[86] = choices[86][1];
 units[86] = "115";
 comments[86] = "Id Pregunta: 10963. TIC A1 AGE 2014";


//  Id pregunta: 10974 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Al configurar una red Ethernet, es correcto que:";
 choices[87]= new Array();
 choices[87][0] = "El administrador de red debe hacer un listado de todas las direcciones MAC que se conectar&aacute;n.";
 choices[87][1] = "El administrador de red debe configurar en cada equipo la direcci&oacute;n MAC de la pasarela por defecto.";
 choices[87][2] = "El administrador de red debe instalar en todos los equipos la compatibilidad con 802.3 (Ethernet) y 802.4 (Gigabit Ethernet).";
 choices[87][3] = "El administrador de red debe establecer los segmentos de la red.";
 answers[87] = choices[87][3];
 units[87] = "101";
 comments[87] = "Id Pregunta: 10974. TIC A1 AGE 2014";


//  Id pregunta: 10976 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Respecto a JSON (JavaScript Object Notation - Notaci&oacute;n de Objetos de JavaScript), se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto solo entre aplicaciones JavaScript.";
 choices[88][1] = "Al igual que XML, permite el intercambio de datos en un formato de texto, tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[88][2] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[88][3] = "Al igual que XML, permite el intercambio de datos en un formato de texto, solo entre aplicaciones JavaScript.";
 answers[88] = choices[88][1];
 units[88] = "114";
 comments[88] = "Id Pregunta: 10976. TIC A1 AGE 2014";


//  Id pregunta: 11336 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Cu&aacute;l de los siguientes es un algoritmo de encaminamiento de estado del enlace";
 choices[89]= new Array();
 choices[89][0] = "IS-IS";
 choices[89][1] = "IGRP";
 choices[89][2] = "BGP";
 choices[89][3] = "RIP";
 answers[89] = choices[89][0];
 units[89] = "102";
 comments[89] = "Id Pregunta: 11336. ";


//  Id pregunta: 11411 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n la Ley 9/2014, cu&aacute;l de los siguientes NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicos dispuestos al p&uacute;blico:";
 choices[90]= new Array();
 choices[90][0] = "Derecho a la continuidad de servicio y a obtener compensaci&oacute;n por su interrupci&oacute;n.";
 choices[90][1] = "Derecho de acceso a servicio de emergencias de forma gratuita.";
 choices[90][2] = "Derecho a informaci&oacute;n veraz, eficaz, suficiente y transparente.";
 choices[90][3] = "Derecho a autorizar el desv&iacute;o automatizado de llamadas.";
 answers[90] = choices[90][3];
 units[90] = "110";
 comments[90] = "Id Pregunta: 11411. ";


//  Id pregunta: 11420 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 9/2014, las propuestas para la elaboraci&oacute;n de normativa relativa a las infraestructuras comunes de comunicaciones electr&oacute;nicas en el interior de edificios es funci&oacute;n de:";
 choices[91]= new Array();
 choices[91][0] = "MINETUR.";
 choices[91][1] = "AGE.";
 choices[91][2] = "Organismos internacionales.";
 choices[91][3] = "CNMC.";
 answers[91] = choices[91][0];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11420. ";


//  Id pregunta: 11433 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Respecto a los derechos de los usuarios finales en la Ley 9/2014, se&ntilde;ale la falsa:";
 choices[92]= new Array();
 choices[92][0] = "El derecho al cambio de operador en 1 d&iacute;a laborable.";
 choices[92][1] = "El derecho a mostrar, mediante un procedimiento sencillo y gratuito, la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen en las llamadas entrantes.";
 choices[92][2] = "Derecho de continuidad del servicio y a obtener compensaci&oacute;n econ&oacute;mica por interrupci&oacute;n.";
 choices[92][3] = "Derecho a detener el desv&iacute;o autom&aacute;tico de llamada efectuado a su terminal por un tercero.";
 answers[92] = choices[92][1];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11433. ";


//  Id pregunta: 11455 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, indique cu&aacute;l de las siguientes afirmaciones sobre los derechos de los usuarios finales es incorrecta:";
 choices[93]= new Array();
 choices[93][0] = "Los usuarios finales tienen derecho a impedir la identificaci&oacute;n de su l&iacute;nea.";
 choices[93][1] = "Los usuarios finales tienen derecho a no recibir llamadas autom&aacute;ticas sin intervenci&oacute;n humana sin su consentimiento previo e informado.";
 choices[93][2] = "Los usuarios finales tienen derecho a la continuidad del servicio y a obtener una compensaci&oacute;n autom&aacute;tica por interrupci&oacute;n del mismo.";
 choices[93][3] = "Los usuarios finales tienen derecho a no figurar en las gu&iacute;as de abonados.";
 answers[93] = choices[93][0];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11455. ";


//  Id pregunta: 11456 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Sobre los plazos relacionados con las decisiones sobre los otorgamientos de derechos de uso en la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[94]= new Array();
 choices[94][0] = "El plazo m&aacute;ximo entre la recepci&oacute;n de la solicitud y la adopci&oacute;n y publicaci&oacute;n de decisiones es de 6 semanas.";
 choices[94][1] = "El plazo m&aacute;ximo entre la petici&oacute;n y la decisi&oacute;n sin hacerla p&uacute;blica  es de 3 semanas.";
 choices[94][2] = "El plazo m&aacute;ximo entre la recepci&oacute;n de solicitud y la adopci&oacute;n, comunicaci&oacute;n y publicaci&oacute;n de decisiones es de 3 semanas, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 choices[94][3] = "Ninguna de las anteriores es correcta.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11456. ";


//  Id pregunta: 11457 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley 9/2014 General de Telecomunicaciones es correcta?:";
 choices[95]= new Array();
 choices[95][0] = "Mediante real decreto el Gobierno otorgar&aacute; los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[95][1] = "El Ministerio de Industria, Energ&iacute;a y Turismo  podr&aacute; fijar, mediante orden ministerial, las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros.";
 choices[95][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia, previo informe del Ministerio de Industria, Energ&iacute;a y Turismo, podr&aacute; modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[95][3] = "Los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n tomar&aacute;n en consideraci&oacute;n los n&uacute;meros, direcciones y nombres necesarios para permitir la efectiva prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 answers[95] = choices[95][3];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11457. ";


//  Id pregunta: 11574 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; tecnolog&iacute;a se caracteriza por dimensionar un sistema de colas sin p&eacute;rdidas con multiplexaci&oacute;n de frecuencias, alta velocidad en el establecimiento de conexiones, estructura celular, transmisi&oacute;n digital y para grupos cerrados de usuarios?";
 choices[96]= new Array();
 choices[96][0] = "DECT";
 choices[96][1] = "TETRA";
 choices[96][2] = "PMR";
 choices[96][3] = "CDCS";
 answers[96] = choices[96][1];
 units[96] = "108";
 comments[96] = "Id Pregunta: 11574. NULL";


//  Id pregunta: 11659 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En UMTS, la banda ascendente FDD usa el rango de frecuencias:";
 choices[97]= new Array();
 choices[97][0] = "1920 MHz a 1980 MHz";
 choices[97][1] = "1980 MHz a 2010 MHz";
 choices[97][2] = "2110 MHz a 2170 MHz";
 choices[97][3] = "2170 MHz a 2200 MHz";
 answers[97] = choices[97][0];
 units[97] = "108";
 comments[97] = "Id Pregunta: 11659. ";


//  Id pregunta: 11703 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;cu&aacute;l no es un mecanismo de transici&oacute;n a ipv6?";
 choices[98]= new Array();
 choices[98][0] = "Tunel 6a4";
 choices[98][1] = "Tunel GRE";
 choices[98][2] = "tunel ISATAP";
 choices[98][3] = "tune PPP";
 answers[98] = choices[98][3];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11703. NULL";


//  Id pregunta: 11724 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[99]= new Array();
 choices[99][0] = "WEP";
 choices[99][1] = "PSK";
 choices[99][2] = "EAP";
 choices[99][3] = "WPA";
 answers[99] = choices[99][3];
 units[99] = "107";
 comments[99] = "Id Pregunta: 11724. NULL";


