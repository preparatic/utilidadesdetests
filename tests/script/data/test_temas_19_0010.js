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

//  Id pregunta: 2943 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Dentro de la capa OSI, la funci&oacute;n de cifrado de datos se realiza en el nivel de:";
 choices[0]= new Array();
 choices[0][0] = "Red";
 choices[0][1] = "Transporte";
 choices[0][2] = "Sesi&oacute;n";
 choices[0][3] = "Presentaci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "100";
 comments[0] = "Id Pregunta: 2943. Similar a examen TIC SS A 2003";


//  Id pregunta: 2945 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Los Bridges:";
 choices[1]= new Array();
 choices[1][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[1][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[1][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[1][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles supeiores";
 answers[1] = choices[1][3];
 units[1] = "102";
 comments[1] = "Id Pregunta: 2945. Examen TIC MAP B 2004";


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


//  Id pregunta: 3043 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Para qu&eacute; se utiliza el entrelazado de bits en la transmisi&oacute;n de informaci&oacute;n? ";
 choices[3]= new Array();
 choices[3][0] = "para proporcionar una sencilla manera de cifrado y conseguir la confidencialidad";
 choices[3][1] = "para evitar que fallos de transmisi&oacute;n afecten a bits consecutivos y se pierda informaci&oacute;n";
 choices[3][2] = "para obtener un c&oacute;digo de redundancia c&iacute;clica que prevenga de errores en recepci&oacute;n";
 choices[3][3] = "Adem&aacute;s de evitar  los fallos de transmisi&oacute;n (los llamados errores de r&aacute;faga) evita que se introduzca una mayor latencia en el sistema agilizando la comunicaci&oacute;n ";
 answers[3] = choices[3][1];
 units[3] = "100";
 comments[3] = "Id Pregunta: 3043. La principal desventaja del entrelazado es que introduce latencia al sistema, ya que tenemos que esperar a la recepci&oacute;n de todos los bits del mensaje para poder desentrelazar y emplear las t&eacute;cnicas de correcci&oacute;n de errores";


//  Id pregunta: 3098 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Una transmisi&oacute;n as&iacute;ncrona se caracteriza porque:";
 choices[4]= new Array();
 choices[4][0] = "Los caracteres se reciben a un ritmo diferente del que se transmiten";
 choices[4][1] = "El terminal receptor funciona a velocidad diferente del emisor";
 choices[4][2] = "Cada car&aacute;cter incorpora su propio sincronismo";
 choices[4][3] = "Se utilizan caracteres de sincronizaci&oacute;n sin periodicidad fija";
 answers[4] = choices[4][2];
 units[4] = "100";
 comments[4] = "Id Pregunta: 3098. Cada caracter a ser transmitido es delimitado por un bit de informaci&oacute;n denominado de cabecera o de arranque, y uno o dos bits denominados de terminaci&oacute;n o de parada";


//  Id pregunta: 3107 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &quot;Bus lineal al que est&aacute;n conectadas varias estaciones y que termina en los extremos&quot; se corresponde con la definici&oacute;n de:";
 choices[5]= new Array();
 choices[5][0] = "intranet";
 choices[5][1] = "segmento";
 choices[5][2] = "pasarela";
 choices[5][3] = "puente";
 answers[5] = choices[5][1];
 units[5] = "100";
 comments[5] = "Id Pregunta: 3107. NULL";


//  Id pregunta: 3109 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; est&aacute;ndar IEEE 802 corresponde el siguiente grupo de caracter&iacute;sticas: &lsquo;Mecanismo de acceso al medio por paso de testigo; topolog&iacute;a en bus l&oacute;gico; contiene las interfaces entre MAC y LLC, as&iacute; como las primitivas de servicio entre MAC y nivel f&iacute;sico&rsquo;?";
 choices[6]= new Array();
 choices[6][0] = "802.2";
 choices[6][1] = "802.4";
 choices[6][2] = "802.6";
 choices[6][3] = "No existe ning&uacute;n est&aacute;ndar IEEE que trate esas caracter&iacute;sticas";
 answers[6] = choices[6][3];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3109. El IEE 802.4 es un paso de testigo en Bus (Topolog&iacute;a F&iacute;sica Bus y L&oacute;gica en Anillo)";


//  Id pregunta: 3114 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;A qu&eacute; nivel OSI corresponden las funciones de encaminamiento?:";
 choices[7]= new Array();
 choices[7][0] = "El nivel de enlace";
 choices[7][1] = "El nivel de red";
 choices[7][2] = "El nivel de transporte";
 choices[7][3] = "El nivel de sesi&oacute;n";
 answers[7] = choices[7][1];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3114. NULL";


//  Id pregunta: 3119 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;A qu&eacute; se denomina 'modem nulo'?:";
 choices[8]= new Array();
 choices[8][0] = "A un modem para transportar datos por lineas digitales y que por lo tanto no modula ni demodula nada";
 choices[8][1] = "A un modem sin microprocesador de control";
 choices[8][2] = "A un cable inversor que conecta dos ETDs entre s&iacute;";
 choices[8][3] = "A un equipo que modula y demodula una se&ntilde;al nula";
 answers[8] = choices[8][2];
 units[8] = "102";
 comments[8] = "Id Pregunta: 3119. ";


//  Id pregunta: 3168 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes dispositivos permite a una Intranet, cuyas m&aacute;quinas tienen direcciones IP no legales, conectarse con Internet y hacerlo adem&aacute;s de forma selectiva seg&uacute;n una lista de URLs autorizadas?:";
 choices[9]= new Array();
 choices[9][0] = "Un servidor FTP ";
 choices[9][1] = "Un servidor WEB ";
 choices[9][2] = "Un router";
 choices[9][3] = " Un proxy";
 answers[9] = choices[9][3];
 units[9] = "113";
 comments[9] = "Id Pregunta: 3168. ";


//  Id pregunta: 3211 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El entorno que utiliza un teletrabajador para conectarse con su empresa a trav&eacute;s de internet se denomina:";
 choices[10]= new Array();
 choices[10][0] = "intranet";
 choices[10][1] = "collaboration-net";
 choices[10][2] = "teleworking-net";
 choices[10][3] = "extranet";
 answers[10] = choices[10][3];
 units[10] = "113";
 comments[10] = "Id Pregunta: 3211. ";


//  Id pregunta: 3219 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes conceptos no aporta seguridad a una intranet?:";
 choices[11]= new Array();
 choices[11][0] = "Spoofing";
 choices[11][1] = "Firewalls";
 choices[11][2] = "NAT";
 choices[11][3] = "Proxy";
 answers[11] = choices[11][0];
 units[11] = "113";
 comments[11] = "Id Pregunta: 3219. ";


//  Id pregunta: 3221 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares define un anillo l&oacute;gico sobre un bus f&iacute;sico?:";
 choices[12]= new Array();
 choices[12][0] = "802.2";
 choices[12][1] = "802.3";
 choices[12][2] = "802.4";
 choices[12][3] = "802.5";
 answers[12] = choices[12][2];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3221. NULL";


//  Id pregunta: 3225 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es protocolo OSI de nivel de aplicaci&oacute;n?:";
 choices[13]= new Array();
 choices[13][0] = "Transferencia de ficheros FTAM";
 choices[13][1] = "Correo electr&oacute;nico X.400";
 choices[13][2] = "Servicios de Directorio X.500";
 choices[13][3] = "Transferencia de correo electr&oacute;nico SMTP";
 answers[13] = choices[13][3];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3225. SMTP es protocolo del nivel de aplicaci&oacute;n del modelo TCP/IP";


//  Id pregunta: 3235 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece al nivel de aplicaci&oacute;n?:";
 choices[14]= new Array();
 choices[14][0] = "Telnet";
 choices[14][1] = "FTP";
 choices[14][2] = "SMTP";
 choices[14][3] = "RIP";
 answers[14] = choices[14][3];
 units[14] = "99";
 comments[14] = "Id Pregunta: 3235. NULL";


//  Id pregunta: 3236 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes protocolos reporta los problemas de entrega y encaminamiento en IP?:";
 choices[15]= new Array();
 choices[15][0] = "TCP";
 choices[15][1] = "ICMP";
 choices[15][2] = "RIP";
 choices[15][3] = "UDP";
 answers[15] = choices[15][1];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3236. NULL";


//  Id pregunta: 3243 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l es la funci&oacute;n que tiene la capa de presentaci&oacute;n (Presentation Layer) en la arquitectura de protocolos ISO de OSI?:";
 choices[16]= new Array();
 choices[16][0] = "Presentar la informaci&oacute;n al usuario final";
 choices[16][1] = "Ocuparse de las distintas representaciones de la informaci&oacute;n en distintas m&aacute;quinas, de tal forma que el significado sea el mismo aunque las representaciones sean diferentes";
 choices[16][2] = "Presentar la informaci&oacute;n a la red estableciendo puntos de sincronismo intermedios para evitar p&eacute;rdidas de informaci&oacute;n en caso de caidas de la red";
 choices[16][3] = "Todas las anteriores son funciones de la capa de sesi&oacute;n";
 answers[16] = choices[16][1];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3243. NULL";


//  Id pregunta: 3253 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;les son los servicios que proporciona el nivel de transporte (4 de OSI) al nivel de sesi&oacute;n (5 de OSI)?:";
 choices[17]= new Array();
 choices[17][0] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos e indicaci&oacute;n de calidad del servicio";
 choices[17][1] = "Transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[17][2] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[17][3] = "Control de calidad del servicio, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 answers[17] = choices[17][1];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3253. NULL";


//  Id pregunta: 3255 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;ntos bytes ocupa la cabecera m&iacute;nima en IPv4?";
 choices[18]= new Array();
 choices[18][0] = "16";
 choices[18][1] = "20";
 choices[18][2] = "24";
 choices[18][3] = "32";
 answers[18] = choices[18][1];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3255. ";


//  Id pregunta: 3277 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; ancho de banda tiene un acceso b&aacute;sico de RDSI en Europa?:";
 choices[19]= new Array();
 choices[19][0] = "64 kbps";
 choices[19][1] = "144 kbps";
 choices[19][2] = "128 kbps";
 choices[19][3] = "2048 kbps";
 answers[19] = choices[19][1];
 units[19] = "103";
 comments[19] = "Id Pregunta: 3277. ";


//  Id pregunta: 3284 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Qu&eacute; es fibra oscura?:";
 choices[20]= new Array();
 choices[20][0] = "Fibra &oacute;ptica que ha perdido sus propiedades y que se ha vuelto opaca";
 choices[20][1] = "Ramal de fibra &oacute;ptica que alquila un particular a un Operador de Telecomunicaciones sin electr&oacute;nica u optr&oacute;nica";
 choices[20][2] = "Un terminador de fibra &oacute;ptica para igualar la impedancia de la l&iacute;nea";
 choices[20][3] = "Fibra &oacute;ptica con impurezas";
 answers[20] = choices[20][1];
 units[20] = "99";
 comments[20] = "Id Pregunta: 3284. NULL";


//  Id pregunta: 3285 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es FTAM (File Transfer Access and Management)?:";
 choices[21]= new Array();
 choices[21][0] = "Un protocolo del nivel de presentaci&oacute;n para gesti&oacute;n de ficheros";
 choices[21][1] = "Una aplicaci&oacute;n para transferencia y compartici&oacute;n de archivos";
 choices[21][2] = "Una aplicaci&oacute;n para emulaci&oacute;n de terminales remotos";
 choices[21][3] = "Un protocolo de la capa TCP/IP para compartir archivos";
 answers[21] = choices[21][1];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3285. ";


//  Id pregunta: 3305 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[22]= new Array();
 choices[22][0] = "R";
 choices[22][1] = "S";
 choices[22][2] = "T";
 choices[22][3] = "U";
 answers[22] = choices[22][2];
 units[22] = "103";
 comments[22] = "Id Pregunta: 3305. ";


//  Id pregunta: 3335 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  BGP es un protocolo que se usa para:";
 choices[23]= new Array();
 choices[23][0] = "Tratar de encontrar un sistema del cual conocemos el nombre y no la direcci&oacute;n de red en redes OSI (Broadcasting Generation Protocol)";
 choices[23][1] = "Es un protocolo de intercambio de informaci&oacute;n en modo binario entre dos entidades de transporte en el modelo OSI, para que las pasen directamente de modo transparente a la capa de Sesi&oacute;n. (Binary Gateway Protocol)";
 choices[23][2] = "Es un protocolo de enrutamiento o encaminamiento por el que se intercambian informaci&oacute;n los routers en las fronteras de los sistemas aut&oacute;nomos en redes TCP/IP (Border Gateway Protocol)";
 choices[23][3] = "Es un protocolo por el que se convierte a nivel de transporte fragmentos (o TPDUs) de Appletalk a fragmentos TCP (Bellcore Gateway Protocol)";
 answers[23] = choices[23][2];
 units[23] = "102";
 comments[23] = "Id Pregunta: 3335. ";


//  Id pregunta: 3398 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El n&uacute;mero m&aacute;ximo que se puede conectar al bus pasivo de usuario en una instalaci&oacute;n b&aacute;sica RDSI es de:";
 choices[24]= new Array();
 choices[24][0] = "2";
 choices[24][1] = "4";
 choices[24][2] = "8";
 choices[24][3] = "16";
 answers[24] = choices[24][2];
 units[24] = "103";
 comments[24] = "Id Pregunta: 3398. ";


//  Id pregunta: 3408 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  FDDI (Fiber Distributed Data Interface) es:";
 choices[25]= new Array();
 choices[25][0] = "Una red de fibra &oacute;ptica tipo &lsquo;paso de testigo&rsquo; en anillo";
 choices[25][1] = "Una red de fibra &oacute;ptica compatible con Ethernet en el interface del transmisor/receptor";
 choices[25][2] = "Un protocolo utilizado en redes que operan a 100 Mbps";
 choices[25][3] = "Una interfaz &oacute;ptica para la distribuci&oacute;n de datos";
 answers[25] = choices[25][0];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3408. ";


//  Id pregunta: 3426 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[26]= new Array();
 choices[26][0] = "802.6";
 choices[26][1] = "802.7";
 choices[26][2] = "802.8";
 choices[26][3] = "802.9";
 answers[26] = choices[26][2];
 units[26] = "101";
 comments[26] = "Id Pregunta: 3426. ";


//  Id pregunta: 3488 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En comunicaciones de datos, &iquest;sabe lo que es  'overrun'?:";
 choices[27]= new Array();
 choices[27][0] = "Cuando el sistema operativo o el procesador de comunicaciones paran por un exceso de temperatura";
 choices[27][1] = "Un switch que permite al sistema tener m&aacute;s rendimiento (bits /seg) bajo ciertas condiciones";
 choices[27][2] = "Una situaci&oacute;n en la que algunos paquetes pueden perderse debido a que llegan m&aacute;s r&aacute;pidamente de lo que pueden ser procesados";
 choices[27][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[27] = choices[27][2];
 units[27] = "102";
 comments[27] = "Id Pregunta: 3488. ";


//  Id pregunta: 3536 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En las topolog&iacute;as de red de &aacute;rea local (LAN) se puede decir:";
 choices[28]= new Array();
 choices[28][0] = "En un bus el control es siempre distribuido";
 choices[28][1] = "El doble anillo permite seguir funcionando aunque se produzcan fallos en los puntos de la red";
 choices[28][2] = "La malla se obtiene cuando se conectan nodos pertenecientes a redes distintas de la misma topolog&iacute;a";
 choices[28][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[28] = choices[28][3];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3536. ";


//  Id pregunta: 3571 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En una comparaci&oacute;n entre modelos OSI y TCP/IP, es falso que:";
 choices[29]= new Array();
 choices[29][0] = "TCP/IP est&aacute; basado en protocolos existentes, mientras que OSI de ISO es independiente del protocolo";
 choices[29][1] = "En OSI los niveles 2 y 3 est&aacute;n sobrecargados, y los niveles 5 y 6 tienen poca funcionalidad";
 choices[29][2] = "En OSI, al igual que en TCP/IP, las primeras implementaciones no tuvieron apenas errores y se distribuyeron gratuitamente, lo que contribuy&oacute; a su difusi&oacute;n";
 choices[29][3] = "En OSI el nivel de transporte es s&oacute;lo orientado a conexi&oacute;n, y el de red soporta servicios orientados y no orientados a conexi&oacute;n, no como en TCP/IP";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3571. NULL";


//  Id pregunta: 3598 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La direcci&oacute;n IPv4 172.30.20.20:";
 choices[30]= new Array();
 choices[30][0] = "Es una direcci&oacute;n privada";
 choices[30][1] = "Es una direcci&oacute;n p&uacute;blica";
 choices[30][2] = "Es una direcci&oacute;n de clase C";
 choices[30][3] = "Es una direcci&oacute;n de clase D";
 answers[30] = choices[30][0];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3598. NULL";


//  Id pregunta: 3611 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[31]= new Array();
 choices[31][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[31][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[31][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[31][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[31] = choices[31][2];
 units[31] = "100,103,113";
 comments[31] = "Id Pregunta: 3611. NULL";


//  Id pregunta: 3621 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La norma IEEE 802.4 es la especificaci&oacute;n que define la redes:";
 choices[32]= new Array();
 choices[32][0] = "Ethernet";
 choices[32][1] = "Token bus";
 choices[32][2] = "Token ring";
 choices[32][3] = "FDDI";
 answers[32] = choices[32][1];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3621. ";


//  Id pregunta: 3624 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  La normativa para sistemas de cableado de edificios es:";
 choices[33]= new Array();
 choices[33][0] = "EIA/TIA 568";
 choices[33][1] = "ISO/IEC DIS 11801";
 choices[33][2] = "EPHOS 2";
 choices[33][3] = "&quot;a&quot; y &quot;b&quot;";
 answers[33] = choices[33][3];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3624. ";


//  Id pregunta: 3642 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La sintaxis de transferencia en ASN.1:";
 choices[34]= new Array();
 choices[34][0] = "Est&aacute; definida dentro del nivel 5 del modelo OSI de ISO";
 choices[34][1] = "Es una sintaxis totalmente conceptual";
 choices[34][2] = "Fue reemplazada por las sintaxis abstractas";
 choices[34][3] = "Ninguna de las anteriores es verdadera";
 answers[34] = choices[34][3];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3642. *: ASN1";


//  Id pregunta: 3648 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  La tecnolog&iacute;a de red de &aacute;rea local Switched Ethernet:";
 choices[35]= new Array();
 choices[35][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[35][1] = "Se basa en el concepto de Microsegmentaci&oacute;n (se reduce el dominio de colisi&oacute;n de tal forma que solo dos nodos coexisten en cada dominio de colisi&oacute;n)";
 choices[35][2] = "Las dos anteriores son falsas";
 choices[35][3] = "Las dos anteriores son correctas";
 answers[35] = choices[35][1];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3648. ";


//  Id pregunta: 3668 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[36]= new Array();
 choices[36][0] = "ET1";
 choices[36][1] = "ET2";
 choices[36][2] = "TR2";
 choices[36][3] = "AT";
 answers[36] = choices[36][2];
 units[36] = "103";
 comments[36] = "Id Pregunta: 3668. ";


//  Id pregunta: 3670 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Una de las funciones de la Gesti&oacute;n de Red es la Funci&oacute;n de Contabilidad Indicar cu&aacute;l de las siguientes tareas no corresponde a esta funci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Evaluar el grado de utilizaci&oacute;n de la red";
 choices[37][1] = "Establecimiento de prioridades y fijaci&oacute;n de franjas de uso de la red";
 choices[37][2] = "Controlar el uso abusivo de determinados elementos";
 choices[37][3] = "Evaluar el rendimiento y calidad de servicio de la red";
 answers[37] = choices[37][3];
 units[37] = "104";
 comments[37] = "Id Pregunta: 3670. ";


//  Id pregunta: 3696 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Las direcciones IPv6 tienen una longitud de:";
 choices[38]= new Array();
 choices[38][0] = "32 bits";
 choices[38][1] = "128 bits";
 choices[38][2] = "64 bits";
 choices[38][3] = "48 bits";
 answers[38] = choices[38][1];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3696. NULL";


//  Id pregunta: 3733 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Los prefijos de subred de longitud arbitraria en IPv4, con notaci&oacute;n a.b.c.d/x donde x es el n&uacute;mero de bits de prefijo, son introducidos seg&uacute;n:";
 choices[39]= new Array();
 choices[39][0] = "CICR";
 choices[39][1] = "CIDR";
 choices[39][2] = "DICR";
 choices[39][3] = "DIDR";
 answers[39] = choices[39][1];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3733. NULL";


//  Id pregunta: 3762 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Para interconectar diferentes redes de &aacute;rea local:";
 choices[40]= new Array();
 choices[40][0] = "Es necesario el uso de puentes";
 choices[40][1] = "Los routers posibilitan la conexi&oacute;n en una misma red de dos cableados diferentes";
 choices[40][2] = "Un bridge interconecta al cable troncal de un edificio el cable Ethernet de cada planta";
 choices[40][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[40] = choices[40][3];
 units[40] = "102";
 comments[40] = "Id Pregunta: 3762. ";


//  Id pregunta: 3825 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Se&ntilde;ale la opci&oacute;n que mejor indica la utilizaci&oacute;n de los cables de cuadretes:";
 choices[41]= new Array();
 choices[41][0] = "Los cables de cuadretes son indicados en transmisiones de baja frecuencia y en largas distancias";
 choices[41][1] = "Los cables de cuadretes se deben utilizar para transmisi&oacute;n de se&ntilde;ales de baja frecuencia y en distancias medias";
 choices[41][2] = "Los cables de cuadretes son indicados en transmisi&oacute;n de se&ntilde;ales de alta frecuencia y en distancias medias";
 choices[41][3] = "Los cables de cuadretes son los adecuados para transmisi&oacute;n de se&ntilde;ales de alta frecuencia y largas distancias";
 answers[41] = choices[41][2];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3825. ";


//  Id pregunta: 3840 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Sobre los sistemas de gesti&oacute;n de red (NMS - &ldquo;Network Management Systems&rdquo;), indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[42]= new Array();
 choices[42][0] = "La mayor&iacute;a de los sistemas de gesti&oacute;n de red utilizan la misma estructura: Los dispositivos en red ejecutan un software (agente de gesti&oacute;n de red) que les permite transmitir alarmas ante la aparici&oacute;n de un problema hacia una estaci&oacute;n de gesti&oacute;n de red.";
 choices[42][1] = "Entre los protocolos de gesti&oacute;n de red mas utilizados se encuentra SNMP (&ldquo;Simple Network Management Protocol&rdquo;) est&aacute;ndar ISO/OSI, y CMIP (&ldquo;Common Management Information Protocol&rdquo;) que forma parte de la familia de protocolos TCP/IP";
 choices[42][2] = "Los agentes de gesti&oacute;n de red son m&oacute;dulos de software que compilan informaci&oacute;n sobre los dispositivos de red en los que residen en una base de datos de estructura jer&aacute;rquica denominada MIB (&ldquo;Management Information Base&rdquo;). ";
 choices[42][3] = "El modelo de sistema de gesti&oacute;n de red de ISO se compone de cinco &aacute;reas conceptuales: Gesti&oacute;n de prestaciones, gesti&oacute;n de configuraci&oacute;n, gesti&oacute;n contable, gesti&oacute;n de fallos y gesti&oacute;n de seguridad";
 answers[42] = choices[42][1];
 units[42] = "104";
 comments[42] = "Id Pregunta: 3840. ";


//  Id pregunta: 3847 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Tras ser extraidos los datos por la estaci&oacute;n destino en una red  Token Ring &oacute; IEEE 802.5:";
 choices[43]= new Array();
 choices[43][0] = "Se devuelve un acuse de recibo ('acknowledgment')  antes de liberar el testigo";
 choices[43][1] = "La trama de datos circula hasta completar una vuelta entera hasta que es eliminada por la estaci&oacute;n emisora";
 choices[43][2] = "Se altera el testigo (que se convierte en una secuencia de cabecera de trama)";
 choices[43][3] = "La estaci&oacute;n a&ntilde;ade informaci&oacute;n adicional al testigo antes de retransmitir la trama";
 answers[43] = choices[43][1];
 units[43] = "101, 102";
 comments[43] = "Id Pregunta: 3847. ";


//  Id pregunta: 3852 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  WLL es:";
 choices[44]= new Array();
 choices[44][0] = "Una DLL para dispositivos wireless";
 choices[44][1] = "Una t&eacute;cnica de dise&ntilde;o de enlaces o links a p&aacute;ginas web";
 choices[44][2] = "Un bucle local inal&aacute;mbrico de abonado en telefon&iacute;a fija";
 choices[44][3] = "Nada de lo anterior";
 answers[44] = choices[44][2];
 units[44] = "103";
 comments[44] = "Id Pregunta: 3852. ";


//  Id pregunta: 3876 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes protocolos se usa para se&ntilde;alizaci&oacute;n en VoIP?";
 choices[45]= new Array();
 choices[45][0] = "POTS";
 choices[45][1] = "RSVP";
 choices[45][2] = "DTMF";
 choices[45][3] = "SIP";
 answers[45] = choices[45][3];
 units[45] = "100";
 comments[45] = "Id Pregunta: 3876. NULL";


//  Id pregunta: 3893 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En la arquitectura TCP/IP, &iquest;cu&aacute;l de los siguientes protocolos no tiene estrictamente TCP/UDP en una capa m&aacute;s baja?:";
 choices[46]= new Array();
 choices[46][0] = "ICMP";
 choices[46][1] = "SNMP.";
 choices[46][2] = "SMTP.";
 choices[46][3] = "MIME.";
 answers[46] = choices[46][0];
 units[46] = "100";
 comments[46] = "Id Pregunta: 3893. Junta Andaluc&iacute;a";


//  Id pregunta: 3925 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Con qu&eacute; est&aacute; relacionado CSMA/CD?";
 choices[47]= new Array();
 choices[47][0] = "802.4";
 choices[47][1] = "802.3";
 choices[47][2] = " 802.5";
 choices[47][3] = " 802.6";
 answers[47] = choices[47][1];
 units[47] = "100";
 comments[47] = "Id Pregunta: 3925. NULL";


//  Id pregunta: 3973 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Velocidades de RDSI de banda ancha en Europa";
 choices[48]= new Array();
 choices[48][0] = "1,5  2,6  155  622 Mbps";
 choices[48][1] = "2    51 155  722 Mbps";
 choices[48][2] = "2    34 155  622 Mbps";
 choices[48][3] = "2   34   155  722 Mbps";
 answers[48] = choices[48][2];
 units[48] = "103";
 comments[48] = "Id Pregunta: 3973. ";


//  Id pregunta: 3990 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Un router puede ser:";
 choices[49]= new Array();
 choices[49][0] = "S&oacute;lo un dispositivo hardware.";
 choices[49][1] = "S&oacute;lo un dispositivo software.";
 choices[49][2] = "Un dispositivo software, hardware o bien una combinaci&oacute;n de ellos.";
 choices[49][3] = "Ninguna de las anteriores es cierta";
 answers[49] = choices[49][2];
 units[49] = "102";
 comments[49] = "Id Pregunta: 3990. ";


//  Id pregunta: 4188 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Es falso que se pueda utilizar como protocolo interno de encaminamiento en la red de un Ministerio";
 choices[50]= new Array();
 choices[50][0] = "Tablas est&aacute;ticas";
 choices[50][1] = "RIP";
 choices[50][2] = "OSPF";
 choices[50][3] = "BGP";
 answers[50] = choices[50][3];
 units[50] = "100";
 comments[50] = "Id Pregunta: 4188. NULL";


//  Id pregunta: 4215 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n";
 choices[51]= new Array();
 choices[51][0] = "El campo SYN del primer segmento TCP es igual a 0";
 choices[51][1] = "El campo SYN del primer segmento TCP es igual a 1";
 choices[51][2] = "El campo RST del primer segmento TCP es igual a 1";
 choices[51][3] = "El campo PSH del primer segmento TCP es igual a 1";
 answers[51] = choices[51][1];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4215. ";


//  Id pregunta: 4349 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  La red de investigaci&oacute;n espa&ntilde;ola encargada de dar servicio Internet a universidades y centros de investigaci&oacute;n es:";
 choices[52]= new Array();
 choices[52][0] = "La intranet del CSIC";
 choices[52][1] = "No existe una red propia de investigaci&oacute;n, utilizando los servicios que ofrece Internet.";
 choices[52][2] = "RedIRIS.";
 choices[52][3] = "La Intranet Administrativa.";
 answers[52] = choices[52][2];
 units[52] = "103";
 comments[52] = "Id Pregunta: 4349. ";


//  Id pregunta: 4418 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  las diferencias principales entre el cable no apantallado UTP tipo 3 y el UTP tipo 5 es que";
 choices[53]= new Array();
 choices[53][0] = "UTP-3 incluye tres pares en un mismo conducto aislante, y UTP-5, cinco pares.";
 choices[53][1] = "UTP-5 es m&aacute;s trenzado por unidad de longitud que UTP-3.";
 choices[53][2] = "UTP-5 utiliza conectores RJ45, y UTP-3 utiliza RJ43.";
 choices[53][3] = "UTP-3 tiene m&aacute;s capacidad (ancho de banda), y consigue mayores velocidades que UTP-5.";
 answers[53] = choices[53][1];
 units[53] = "99";
 comments[53] = "Id Pregunta: 4418. ";


//  Id pregunta: 4451 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  En qu&eacute; capa del modelo de referencia OSI se localiza la subcapa de control de acceso al medio?";
 choices[54]= new Array();
 choices[54][0] = "Capa f&iacute;sica.";
 choices[54][1] = "Capa de sesi&oacute;n.";
 choices[54][2] = "Capa de transporte.";
 choices[54][3] = "Capa de enlace de datos.";
 answers[54] = choices[54][3];
 units[54] = "100";
 comments[54] = "Id Pregunta: 4451. NULL";


//  Id pregunta: 5009 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (TransmissionControl Protocol/Internet Protocol)?";
 choices[55]= new Array();
 choices[55][0] = "PGR";
 choices[55][1] = "SMTP";
 choices[55][2] = "ICMP";
 choices[55][3] = "SNMP";
 answers[55] = choices[55][3];
 units[55] = "104";
 comments[55] = "Id Pregunta: 5009. Examen TIC A 2007";


//  Id pregunta: 5018 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[56]= new Array();
 choices[56][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet";
 choices[56][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet";
 choices[56][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree)";
 choices[56][3] = "De la especificaci&oacute;n 1000Base-T";
 answers[56] = choices[56][1];
 units[56] = "101";
 comments[56] = "Id Pregunta: 5018. Examen TIC A 2007";


//  Id pregunta: 5459 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[57]= new Array();
 choices[57][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[57][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[57][2] = "Permite crear redes privadas virtuales";
 choices[57][3] = "Todas las respuestas son correctas";
 answers[57] = choices[57][3];
 units[57] = "100, 101, 107, 111";
 comments[57] = "Id Pregunta: 5459. Castilla y Le&oacute;n";


//  Id pregunta: 5511 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indique cu&aacute;l de los siguientes no es un elemento de la arquitectura de la red europea TESTA-II:";
 choices[58]= new Array();
 choices[58][0] = "LocalDomain";
 choices[58][1] = "EuroDomain";
 choices[58][2] = "EuroNet";
 choices[58][3] = "EuroGate";
 answers[58] = choices[58][2];
 units[58] = "103";
 comments[58] = "Id Pregunta: 5511. ";


//  Id pregunta: 5833 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[59]= new Array();
 choices[59][0] = "Hub";
 choices[59][1] = "Puente";
 choices[59][2] = "NIC (Network Interface Card)";
 choices[59][3] = "Router";
 answers[59] = choices[59][3];
 units[59] = "102";
 comments[59] = "Id Pregunta: 5833. MAP 2008 A1";


//  Id pregunta: 5888 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  Teniendo una red IP con m&aacute;scara 255.255.240.0 &iquest;cu&aacute;ntos puestos se pueden direccionar?";
 choices[60]= new Array();
 choices[60][0] = "240";
 choices[60][1] = "512";
 choices[60][2] = "1024";
 choices[60][3] = "4094";
 answers[60] = choices[60][3];
 units[60] = "100";
 comments[60] = "Id Pregunta: 5888. MAP 2008 A1";


//  Id pregunta: 6105 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[61]= new Array();
 choices[61][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[61][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[61][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[61][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[61] = choices[61][1];
 units[61] = "100";
 comments[61] = "Id Pregunta: 6105. TIC A 2009";


//  Id pregunta: 6480 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; protocolo define las VLAN (Virtual LAN)?";
 choices[62]= new Array();
 choices[62][0] = "RFC 1032";
 choices[62][1] = "IEEE 802.3u";
 choices[62][2] = "IEEE 802.1q";
 choices[62][3] = "IEEE 802.11";
 answers[62] = choices[62][2];
 units[62] = "101";
 comments[62] = "Id Pregunta: 6480. Castilla La Mancha 2009";


//  Id pregunta: 6481 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de enrutamiento?";
 choices[63]= new Array();
 choices[63][0] = "OSPF";
 choices[63][1] = "RIP";
 choices[63][2] = "BGP";
 choices[63][3] = "RARP";
 answers[63] = choices[63][3];
 units[63] = "102";
 comments[63] = "Id Pregunta: 6481. Castilla La Mancha 2009";


//  Id pregunta: 6575 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Podemos definir ARP poisoning como";
 choices[64]= new Array();
 choices[64][0] = "Alteraci&oacute;n de la tabla ARP para que una direcci&oacute;n IP se corresponda con una MAC distinta a la que ten&iacute;a";
 choices[64][1] = "Con este ataque no se puede redirigir el tr&aacute;fico al ordenador del atacante";
 choices[64][2] = "A y B son correctas";
 choices[64][3] = "A y B son incorrectas";
 answers[64] = choices[64][0];
 units[64] = "100";
 comments[64] = "Id Pregunta: 6575. NULL";


//  Id pregunta: 7245 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;A qu&eacute; se corresponde el RFC 793?";
 choices[65]= new Array();
 choices[65][0] = "Al protocolo FTP";
 choices[65][1] = "Al protocolo HTTP";
 choices[65][2] = "Al protocolo TCP";
 choices[65][3] = "Al protocolo IP";
 answers[65] = choices[65][2];
 units[65] = "100";
 comments[65] = "Id Pregunta: 7245. Examen TIC B 2009";


//  Id pregunta: 8176 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Referente al protocolo Internet Protocol versi&oacute;n 4 (IPv4), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[66]= new Array();
 choices[66][0] = "S&oacute;lo permite identificar hasta 256 protocolos para la parte de datos del datagrama.";
 choices[66][1] = "No permite volver a fragmentar un datagrama ya fragmentado (pues la fragmentaci&oacute;n se indica con el bit MF).";
 choices[66][2] = "La unidad de transferencia m&aacute;xima o Maximun Transmission Unit (MTU) es siempre de 65.535 bytes.";
 choices[66][3] = "Si los datagramas han sido fragmentados, al pasar a una red que puede manejar un PDU m&aacute;ximo mayor que la red de origen, previamente a ser reenviados, los fragmentos deben ser reensamblados.";
 answers[66] = choices[66][0];
 units[66] = "100";
 comments[66] = "Id Pregunta: 8176. Examen TIC A1 2010";


//  Id pregunta: 8275 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En el protocolo Internet Protocol versi&oacute;n 6 (IPv6), &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[67]= new Array();
 choices[67][0] = "S&oacute;lo se permite fragmentar en el origen.";
 choices[67][1] = "No tiene un mecanismo equivalente al del bit Don't Fragment (DF) de IPv4.";
 choices[67][2] = "Se requiere que todos los enlaces tengan un MTU de 1500 octetos o mayor.";
 choices[67][3] = "Un jumbograma es un paquete IPv6 que contiene una carga &uacute;til (payload) mayor que 65535 octetos.";
 answers[67] = choices[67][2];
 units[67] = "100";
 comments[67] = "Id Pregunta: 8275. Examen TIC A1 2010";


//  Id pregunta: 8314 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El c&oacute;dec G.729 especificado por la ITU-T para la codificaci&oacute;n de voz para su uso en sistemas de Voz sobre IP, &iquest;a qu&eacute; tasas de bit puede operar?";
 choices[68]= new Array();
 choices[68][0] = "A 56 o 64 kbps.";
 choices[68][1] = "A 6.4, 8 o 11.8 kbps. ";
 choices[68][2] = "&Uacute;nicamente a 8 kbps. ";
 choices[68][3] = "A 5.3 o 6.4 kbps.";
 answers[68] = choices[68][1];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8314. Examen TIC A2 2010";


//  Id pregunta: 8315 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La recomendaci&oacute;n para VoIP, definida en 1996 por la UIT es el:";
 choices[69]= new Array();
 choices[69][0] = "H.261. ";
 choices[69][1] = "H.320. ";
 choices[69][2] = "H.221. ";
 choices[69][3] = "H.323.";
 answers[69] = choices[69][3];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8315. Examen TIC A2 2010";


//  Id pregunta: 8768 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Identificar la descripci&oacute;n del comando IP ERR&Oacute;NEO:";
 choices[70]= new Array();
 choices[70][0] = "NETSTAT: es una herramienta de l&iacute;nea de comandos que muestra un listado de las conexiones activas de un ordenador, tanto entrantes como salientes. Permite mostrar las estad&iacute;sticas de protocolos y las conexiones TCP/IP actuales";
 choices[70][1] = "IPCONFIG: Muestra o actualiza la configuraci&oacute;n de red TCP/IP";
 choices[70][2] = "NBTSTAT: Muestra estad&iacute;sticas del protocolo y conexiones TCP/IP actuales utilizando NBT. NBTStat es una herramienta que resulta de utilidad para solucionar problemas con la resoluci&oacute;n de nombres llevada a cabo por NetBIOS.";
 choices[70][3] = "TRACERT Muestra todas las direcciones IP intermedias por las que pasa un paquete entre el equipo remoto y la direcci&oacute;n IP especificada.";
 answers[70] = choices[70][3];
 units[70] = "100";
 comments[70] = "Id Pregunta: 8768. Examen TIC A2 2010 interna";


//  Id pregunta: 8787 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; protocolo puede encontrar la direcci&oacute;n MAC de un computador, dada su direcci&oacute;n IP?";
 choices[71]= new Array();
 choices[71][0] = "RARP";
 choices[71][1] = "DHCP";
 choices[71][2] = "ARP";
 choices[71][3] = "Proxy RARP";
 answers[71] = choices[71][2];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8787. Examen UPM A2 2011";


//  Id pregunta: 8919 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[72]= new Array();
 choices[72][0] = "ROUTE";
 choices[72][1] = "NETSTAT";
 choices[72][2] = "NBTSTAT";
 choices[72][3] = "TRACERT";
 answers[72] = choices[72][1];
 units[72] = "104";
 comments[72] = "Id Pregunta: 8919. Operador Ayto. Madrid 2010";


//  Id pregunta: 9016 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[73]= new Array();
 choices[73][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[73][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[73][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][2];
 units[73] = "99";
 comments[73] = "Id Pregunta: 9016. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9023 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[74]= new Array();
 choices[74][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[74][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[74][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][1];
 units[74] = "104";
 comments[74] = "Id Pregunta: 9023. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9027 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Las centralitas MD-110 del servicio Ibercom que constituyen una RAI";
 choices[75]= new Array();
 choices[75][0] = "Se interconectan mediante una RPV (red privada virtual) establecida por el operador en sus centrales p&uacute;blicas.";
 choices[75][1] = "Necesariamente se conectan mediante un CF (centro frontal).";
 choices[75][2] = "Se interconectan entre si mediante un bus compartido.";
 choices[75][3] = "Ninguna de las anteriores";
 answers[75] = choices[75][1];
 units[75] = "103";
 comments[75] = "Id Pregunta: 9027. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9044 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[76]= new Array();
 choices[76][0] = "Capa F&iacute;sica de Datos";
 choices[76][1] = "Capa de Red";
 choices[76][2] = "Capa de Enlace de Datos";
 choices[76][3] = "Capa de Transporte";
 answers[76] = choices[76][2];
 units[76] = "100";
 comments[76] = "Id Pregunta: 9044. ";


//  Id pregunta: 9335 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;C&oacute;mo se denomina al subsistema de cableado estructurado que interconecta los armarios de planta de un edificio?";
 choices[77]= new Array();
 choices[77][0] = "Subsistema campus";
 choices[77][1] = "Subsistema horizontal";
 choices[77][2] = "Subsistema intermodal";
 choices[77][3] = "Subsistema troncal";
 answers[77] = choices[77][3];
 units[77] = "99";
 comments[77] = "Id Pregunta: 9335. TIC a2 AGE 2011";


//  Id pregunta: 9354 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[78]= new Array();
 choices[78][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[78][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[78][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[78][3] = "Ninguna de las respuestas es correcta.";
 answers[78] = choices[78][0];
 units[78] = "103";
 comments[78] = "Id Pregunta: 9354. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9358 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[79]= new Array();
 choices[79][0] = "40GBASE-KR4";
 choices[79][1] = "4GBASE-SR40";
 choices[79][2] = "40GBASE-SR4";
 choices[79][3] = "40GBASE-LR4";
 answers[79] = choices[79][3];
 units[79] = "99";
 comments[79] = "Id Pregunta: 9358. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9359 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[80]= new Array();
 choices[80][0] = "CWDM ";
 choices[80][1] = "SDH ";
 choices[80][2] = "WDM ";
 choices[80][3] = "DWDM ";
 answers[80] = choices[80][3];
 units[80] = "99";
 comments[80] = "Id Pregunta: 9359. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9369 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Ante situaciones de congesti&oacute;n, Resilient Packet Ring:";
 choices[81]= new Array();
 choices[81][0] = "Reacciona descartando paquetes.";
 choices[81][1] = "Utiliza el algoritmo Fairness, que sirve para los servicios de clase A1, B-CIR, B-EIR y C; y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo y que se puede reutilizar de las diferentes clases.";
 choices[81][2] = "Utiliza el algoritmo Fairness, que sirve para todos los tipos de tr&aacute;fico y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo.";
 choices[81][3] = "No tiene control de congesti&oacute;n.";
 answers[81] = choices[81][1];
 units[81] = "101";
 comments[81] = "Id Pregunta: 9369. ";


//  Id pregunta: 9744 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[82]= new Array();
 choices[82][0] = "Model View Controller.";
 choices[82][1] = "Multiple Views Canvas.";
 choices[82][2] = "Mobile Video Compatible.";
 choices[82][3] = "Mobile View Connector.";
 answers[82] = choices[82][0];
 units[82] = "113";
 comments[82] = "Id Pregunta: 9744. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9927 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Entre los conceptos fundamentales del modelo OSI no est&aacute;:";
 choices[83]= new Array();
 choices[83][0] = "Interfaz: normas de comunicaci&oacute;n entre capas.";
 choices[83][1] = "Primitivas de servicio: llamadas entrantes o salientes en cada una de las capas.";
 choices[83][2] = "Protocolo: conjunto de reglas organizadas y convenidas entre los participantes en una comunicaci&oacute;n.";
 choices[83][3] = "Servicio: cada capa recibe servicios de las entidades que se encuentran sobre ella y presta servicios a las entidades que se encuentran debajo.";
 answers[83] = choices[83][3];
 units[83] = "100";
 comments[83] = "Id Pregunta: 9927. NULL";


//  Id pregunta: 10058 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En las comunicaciones a trav&eacute;s de sockets, &iquest;cu&aacute;l de las siguientes NO se corresponde con una primitiva?";
 choices[84]= new Array();
 choices[84][0] = "Bind ";
 choices[84][1] = "Listen";
 choices[84][2] = "Reject ";
 choices[84][3] = "Socket";
 answers[84] = choices[84][2];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10058. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10075 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  La tecnolog&iacute;a WiMAX 2 es conocida formalmente como:";
 choices[85]= new Array();
 choices[85][0] = "802.16m ";
 choices[85][1] = "802.16a";
 choices[85][2] = "802.11x ";
 choices[85][3] = "802.11n";
 answers[85] = choices[85][0];
 units[85] = "101";
 comments[85] = "Id Pregunta: 10075. TIC A2, libre, Examen 2013";


//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El tama&ntilde;o de trama m&iacute;nimo en Ethernet es:";
 choices[86]= new Array();
 choices[86][0] = "48 bytes";
 choices[86][1] = "24 bytes";
 choices[86][2] = "128 bytes";
 choices[86][3] = "64 bytes";
 answers[86] = choices[86][3];
 units[86] = "101";
 comments[86] = "Id Pregunta: 10113. ";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[87]= new Array();
 choices[87][0] = "GEANT";
 choices[87][1] = "IRIS";
 choices[87][2] = "TESTA";
 choices[87][3] = "SARA";
 answers[87] = choices[87][1];
 units[87] = "103";
 comments[87] = "Id Pregunta: 10126. ";


//  Id pregunta: 10128 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en: ";
 choices[88]= new Array();
 choices[88][0] = "El elemento gestionado";
 choices[88][1] = "El nodo de gesti&oacute;n central";
 choices[88][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[88][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[88] = choices[88][0];
 units[88] = "104";
 comments[88] = "Id Pregunta: 10128. ";


//  Id pregunta: 10294 AÃ±o de creación de pregunta: 2010-01-01
 questions[89]= "90)  Indique cu&aacute;l de los siguientes es un tipo v&aacute;lido de cable de par trenzado seg&uacute;n su aislamiento o apantallamiento:";
 choices[89]= new Array();
 choices[89][0] = "scp";
 choices[89][1] = "htp";
 choices[89][2] = "ftp";
 choices[89][3] = "ssh";
 answers[89] = choices[89][2];
 units[89] = "99";
 comments[89] = "Id Pregunta: 10294. TIC A2, libre, examen 2013";


//  Id pregunta: 10315 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Los conectores LC son:";
 choices[90]= new Array();
 choices[90][0] = "Conectores para PCI.";
 choices[90][1] = "Conectores de par trenzado.";
 choices[90][2] = "Conectores exclusivos para Mainframe.";
 choices[90][3] = "Conectores de fibra &oacute;ptica.";
 answers[90] = choices[90][3];
 units[90] = "99";
 comments[90] = "Id Pregunta: 10315. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[91]= new Array();
 choices[91][0] = "255.255.255.255";
 choices[91][1] = "FF::FF";
 choices[91][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[91][3] = "FF:FF:FF:FF:FF:FF";
 answers[91] = choices[91][3];
 units[91] = "101";
 comments[91] = "Id Pregunta: 10319. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10881 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[92]= new Array();
 choices[92][0] = "Jitter.";
 choices[92][1] = "Delay.";
 choices[92][2] = "Round Trip delay Time.";
 choices[92][3] = "Latencia.";
 answers[92] = choices[92][2];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10881. Examen GSI 2014";


//  Id pregunta: 10884 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En una red Ethernet 10BASE-T, un paquete de 1000 KBytes se transmite en:";
 choices[93]= new Array();
 choices[93][0] = "0,81 ms";
 choices[93][1] = "8,19 ms";
 choices[93][2] = "819 ms";
 choices[93][3] = "81,9 ms";
 answers[93] = choices[93][2];
 units[93] = "99";
 comments[93] = "Id Pregunta: 10884. Examen GSI 2014";


//  Id pregunta: 11682 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[94]= new Array();
 choices[94][0] = "MAC";
 choices[94][1] = "Segmento";
 choices[94][2] = "Paquete";
 choices[94][3] = "Trama";
 answers[94] = choices[94][3];
 units[94] = "100";
 comments[94] = "Id Pregunta: 11682. NULL";


//  Id pregunta: 11683 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Cuando el servidor web envia una respuesta, seg&uacute;n el modelo OSI los datos primero se encapsulan en un";
 choices[95]= new Array();
 choices[95][0] = "Paquete";
 choices[95][1] = "Segmento";
 choices[95][2] = "Trama";
 choices[95][3] = "Frame";
 answers[95] = choices[95][1];
 units[95] = "100";
 comments[95] = "Id Pregunta: 11683. NULL";


//  Id pregunta: 11688 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El OUI de una direcci&oacute;n MAC posee";
 choices[96]= new Array();
 choices[96][0] = "6 digitos Hexadecimales";
 choices[96][1] = "32bits";
 choices[96][2] = "48bits";
 choices[96][3] = "24bytes";
 answers[96] = choices[96][0];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11688. NULL";


//  Id pregunta: 11698 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Una WAN Frame-Relay est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[97]= new Array();
 choices[97][0] = "Punto a punto";
 choices[97][1] = "Broadcast multi-acceso";
 choices[97][2] = "No broadcast multi-acceso";
 choices[97][3] = "Broadcast punto a multipunto";
 answers[97] = choices[97][2];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11698. NULL";


//  Id pregunta: 11704 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[98]= new Array();
 choices[98][0] = "2000::/3";
 choices[98][1] = "FF00::/10";
 choices[98][2] = "FE00::/12";
 choices[98][3] = "::1/128";
 answers[98] = choices[98][0];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11704. NULL";


//  Id pregunta: 11713 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[99]= new Array();
 choices[99][0] = "Direccion destino IP";
 choices[99][1] = "Direccion origen IP";
 choices[99][2] = "Protocolo";
 choices[99][3] = "Puerto";
 answers[99] = choices[99][1];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11713. NULL";


