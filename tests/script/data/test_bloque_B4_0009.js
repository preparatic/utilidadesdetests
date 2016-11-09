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

//  Id pregunta: 2939 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  La plataforma Java que se utiliza para el desarrollo de aplicaciones para PDA es:";
 choices[0]= new Array();
 choices[0][0] = "Micro Edition";
 choices[0][1] = "Standard Edition";
 choices[0][2] = "Enterprise Edition";
 choices[0][3] = "Cualquiera de ellas indistintamente dada su portabilidad";
 answers[0] = choices[0][0];
 units[0] = "116";
 comments[0] = "Id Pregunta: 2939. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2966 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Indique a qu&eacute; velocidad aproximada dentro de la Jerarqu&iacute;a Digital S&iacute;ncrona corresponde a un contenedor OC-3 de la Jerarqu&iacute;a SONET:";
 choices[1]= new Array();
 choices[1][0] = "52 Mbps";
 choices[1][1] = "155 Mbps";
 choices[1][2] = "384 Mpbs";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][1];
 units[1] = "109";
 comments[1] = "Id Pregunta: 2966. ";


//  Id pregunta: 3005 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La familia de redes locales inal&aacute;mbricas WLAN operan en las bandas de frecuencia:";
 choices[2]= new Array();
 choices[2][0] = "2.4 GHz y 5 Ghz";
 choices[2][1] = "10MHz y 100MHz";
 choices[2][2] = "1MHz y 10 MHz";
 choices[2][3] = "ninguna de las anteriores";
 answers[2] = choices[2][0];
 units[2] = "107";
 comments[2] = "Id Pregunta: 3005. NULL";


//  Id pregunta: 3046 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; considera menos adecuado para proteger una red de posibles virus?:";
 choices[3]= new Array();
 choices[3][0] = "Ordenadores sin disquetera, con todo el software preinstalado";
 choices[3][1] = "Proteger cada estaci&oacute;n de trabajo mediante explorador de signaturas, explorador de sumas de verificaci&oacute;n y un controlador de actividad residente en memoria";
 choices[3][2] = "Prestar atenci&oacute;n a los ordenadores alquilados o que se vayan a reparar fuera de la empresa";
 choices[3][3] = "Utilizar ordenadores de encendido remoto";
 answers[3] = choices[3][3];
 units[3] = "111";
 comments[3] = "Id Pregunta: 3046. NULL";


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


//  Id pregunta: 3062 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En las Active Server Pages de Microsoft IIS:";
 choices[5]= new Array();
 choices[5][0] = "Las p&aacute;ginas ASP son ficheros de texto, con c&oacute;digo VBScript o JScript, que es Interpretado";
 choices[5][1] = "Las p&aacute;ginas ASPX son ficheros compilados con c&oacute;digo de lenguajes Microsoft.NET";
 choices[5][2] = "Las p&aacute;ginas CFM son p&aacute;ginas con c&oacute;digo C, interpretado";
 choices[5][3] = "A y B son ciertas";
 answers[5] = choices[5][3];
 units[5] = "115";
 comments[5] = "Id Pregunta: 3062. NULL";


//  Id pregunta: 3064 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En los dispositivos de red se utiliza el 'buffering' para:";
 choices[6]= new Array();
 choices[6][0] = "Almacenar temporalmente los datos recibidos hasta que puedan ser procesados";
 choices[6][1] = "Informar al origen del tr&aacute;fico de que deber&iacute;a usarse control de flujo";
 choices[6][2] = "Emitir el ACK de las tranmisiones que se han recibido";
 choices[6][3] = "Impedir que los dispositivos fuente (emisores) transmitan datos a menos que se les pida expl&iacute;citamente";
 answers[6] = choices[6][0];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3064. NULL";


//  Id pregunta: 3076 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  La introducci&oacute;n de redundancias en un c&oacute;digo de representaci&oacute;n, por ejemplo la introducci&oacute;n de un bit de paridad (par o impar), se hace para:";
 choices[7]= new Array();
 choices[7][0] = "Detectar posibles errores en la transmisi&oacute;n de la informaci&oacute;n";
 choices[7][1] = "Aumentar la eficacia del c&oacute;digo";
 choices[7][2] = "Aumentar el n&uacute;mero de datos susceptibles de representaci&oacute;n";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = choices[7][0];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3076. NULL";


//  Id pregunta: 3082 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Los objetos que intervienen en la capa de aplicaci&oacute;n se denominan:";
 choices[8]= new Array();
 choices[8][0] = "Objetos de aplicaci&oacute;n";
 choices[8][1] = "Objetos de negocio";
 choices[8][2] = "Objetos distribuidos";
 choices[8][3] = "Objetos de servidor";
 answers[8] = choices[8][1];
 units[8] = "114,115,116";
 comments[8] = "Id Pregunta: 3082. ";


//  Id pregunta: 3092 AÃ±o de creación de pregunta: 2005-01-01
 questions[9]= "10)  Un ataque del tipo denegaci&oacute;n de servicio (DoS = Denial of Service) a un servidor Web afecta a:";
 choices[9]= new Array();
 choices[9][0] = "Las respuestas 'c' y 'd' son correctas";
 choices[9][1] = "La dimensi&oacute;n de autenticaci&oacute;n de los usuarios";
 choices[9][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[9][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 answers[9] = choices[9][3];
 units[9] = "111";
 comments[9] = "Id Pregunta: 3092. NULL";


//  Id pregunta: 3095 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Un sistema, si se desea que controle los intentos de violaci&oacute;n debe incorporar:";
 choices[10]= new Array();
 choices[10][0] = "An&aacute;lisis y validaci&oacute;n de la llamada";
 choices[10][1] = "Registro de la historia y fecha de la contrase&ntilde;a";
 choices[10][2] = "Forzar a que los usuarios cambien la contrase&ntilde;a";
 choices[10][3] = "Todas las respuestas anteriores son ciertas";
 answers[10] = choices[10][3];
 units[10] = "111";
 comments[10] = "Id Pregunta: 3095. NULL";


//  Id pregunta: 3153 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si hablamos de sincronizaci&oacute;n?:";
 choices[11]= new Array();
 choices[11][0] = "En la transmisi&oacute;n as&iacute;ncrona, la sincronizaci&oacute;n se realiza mediante los bits de arranque y parada";
 choices[11][1] = "En la transmisi&oacute;n s&iacute;ncrona, la sincronizaci&oacute;n se restablece con cada car&aacute;cter retransmitido";
 choices[11][2] = "Las se&ntilde;ales is&oacute;cronas requieren una sincronizaci&oacute;n interna, de modo que las sucesivas muestras se transmitan a intervalos fijos a partir de la primera";
 choices[11][3] = "En una red plesi&oacute;crona los equipos se sincronizan a partir de relojes independientes de similar precisi&oacute;n y estabilidad";
 answers[11] = choices[11][1];
 units[11] = "97";
 comments[11] = "Id Pregunta: 3153. NULL";


//  Id pregunta: 3168 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes dispositivos permite a una Intranet, cuyas m&aacute;quinas tienen direcciones IP no legales, conectarse con Internet y hacerlo adem&aacute;s de forma selectiva seg&uacute;n una lista de URLs autorizadas?:";
 choices[12]= new Array();
 choices[12][0] = "Un servidor FTP ";
 choices[12][1] = "Un servidor WEB ";
 choices[12][2] = "Un router";
 choices[12][3] = " Un proxy";
 answers[12] = choices[12][3];
 units[12] = "113";
 comments[12] = "Id Pregunta: 3168. ";


//  Id pregunta: 3177 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xDSL?";
 choices[13]= new Array();
 choices[13][0] = "HDSL";
 choices[13][1] = "VDSL";
 choices[13][2] = "ADSL";
 choices[13][3] = "MDSL";
 answers[13] = choices[13][3];
 units[13] = "107";
 comments[13] = "Id Pregunta: 3177. NULL";


//  Id pregunta: 3222 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de posicionamiento m&oacute;vil ofrece menor precisi&oacute;n?:";
 choices[14]= new Array();
 choices[14][0] = "A-GPS";
 choices[14][1] = "E-OTD";
 choices[14][2] = "CGI-TA";
 choices[14][3] = "TOA";
 answers[14] = choices[14][2];
 units[14] = "108";
 comments[14] = "Id Pregunta: 3222. ";


//  Id pregunta: 3258 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cuantos niveles f&iacute;sicos estandarizados define 802.11?:";
 choices[15]= new Array();
 choices[15][0] = "5";
 choices[15][1] = "3";
 choices[15][2] = "Solo 1";
 choices[15][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[15] = choices[15][0];
 units[15] = "107";
 comments[15] = "Id Pregunta: 3258. NULL";


//  Id pregunta: 3271 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;En qu&eacute; tipo de aplicaci&oacute;n no ser&iacute;a adecuada la instalaci&oacute;n de una conexi&oacute;n Frame Relay?:";
 choices[16]= new Array();
 choices[16][0] = "Correo electr&oacute;nico";
 choices[16][1] = "Conexi&oacute;n de redes de area local";
 choices[16][2] = "Video";
 choices[16][3] = "Todas las anteriores son posibles aplicaciones de una red Frame Relay de alta velocidad";
 answers[16] = choices[16][2];
 units[16] = "109";
 comments[16] = "Id Pregunta: 3271. ";


//  Id pregunta: 3282 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Qu&eacute; es el modo en una transmisi&oacute;n por fibra &oacute;ptica?:";
 choices[17]= new Array();
 choices[17][0] = "Es el trayecto de un rayo en una fibra";
 choices[17][1] = "Es el trayecto de todos los haces de una fibra";
 choices[17][2] = "Es la polarizaci&oacute;n que existe en la fibra en cada momento de la transmisi&oacute;n";
 choices[17][3] = "Es el tipo de modulaci&oacute;n digital que se imprime al rayo al introducirlo en la fibra";
 answers[17] = choices[17][0];
 units[17] = "97";
 comments[17] = "Id Pregunta: 3282. NULL";


//  Id pregunta: 3316 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Qu&eacute; topolog&iacute;a tiene una red ethernet cableada con 10 Base T?:";
 choices[18]= new Array();
 choices[18][0] = "Bus";
 choices[18][1] = "Estrella";
 choices[18][2] = "Anillo";
 choices[18][3] = "Doble bus";
 answers[18] = choices[18][1];
 units[18] = "97";
 comments[18] = "Id Pregunta: 3316. NULL";


//  Id pregunta: 3322 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  100BaseTX, 100BaseFX, y 100BaseT4 usan los tipos de cable (o de superior calidad) , respectivamente:";
 choices[19]= new Array();
 choices[19][0] = "Categoria 5 STP, fibra &oacute;ptica, y categor&iacute;a 5 STP";
 choices[19][1] = "Fibra &oacute;ptica, Categoria 5 UTP, y categor&iacute;a 3 UTP";
 choices[19][2] = "Categor&iacute;a 5 UTP, tipo 1 STP,  y categor&iacute;a 3 UTP";
 choices[19][3] = "Categor&iacute;a 5 UTP, fibra &oacute;ptica, y categor&iacute;a 3 UTP";
 answers[19] = choices[19][3];
 units[19] = "97";
 comments[19] = "Id Pregunta: 3322. NULL";


//  Id pregunta: 3353 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  De IPSec, una de las siguientes afirmaciones no es cierta. Indicar cu&aacute;l:";
 choices[20]= new Array();
 choices[20][0] = "Para transmitir IPSec, tanto en modo transporte como en modo t&uacute;nel se ha de incluir una cabecera justo delante de la cabecera IP original y una cola detr&aacute;s de los datos";
 choices[20][1] = "En modo transporte, IPSec se tiene entre los sistemas finales, mientras en modo t&uacute;nel se tiene IPSec entre routers pero IP en los tramos routers-sistemas finales";
 choices[20][2] = "El protocolo por defecto para la gesti&oacute;n de claves en IPSec se denomina IKE (Internet Key Exchange)";
 choices[20][3] = "Entre otros, IPSec proporciona mecanismos anti-replay, autenticaci&oacute;n, control de acceso y confidencialidad de datos";
 answers[20] = choices[20][0];
 units[20] = "111";
 comments[20] = "Id Pregunta: 3353. NULL";


//  Id pregunta: 3401 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El PMD:";
 choices[21]= new Array();
 choices[21][0] = "Es el acr&oacute;nimo de Physical Medium Dependent";
 choices[21][1] = "Pertenece al Nivel 2 de 802.11";
 choices[21][2] = "Es la uni&oacute;n entre MAC y PLCP";
 choices[21][3] = "Todas las anteriores respuestas son correctas";
 answers[21] = choices[21][0];
 units[21] = "109";
 comments[21] = "Id Pregunta: 3401. ";


//  Id pregunta: 3436 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[22]= new Array();
 choices[22][0] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[22][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[22][2] = "Los nodos PPP se anuncian para obtenci&oacute;n din&aacute;mica de direcci&oacute;n o preguntan a los servidores para uqe se les asigne una direcci&oacute;n";
 choices[22][3] = "El nodo iniciador envia tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 answers[22] = choices[22][3];
 units[22] = "101";
 comments[22] = "Id Pregunta: 3436. ";


//  Id pregunta: 3442 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El protocolo CSMA/CD utilizado en el subnivel MAC de las LAN es propio de las redes:";
 choices[23]= new Array();
 choices[23][0] = "Ethernet";
 choices[23][1] = "Token ring";
 choices[23][2] = "Token bus";
 choices[23][3] = "Se puede emplear en cualquiera de las anteriores";
 answers[23] = choices[23][0];
 units[23] = "101";
 comments[23] = "Id Pregunta: 3442. ";


//  Id pregunta: 3534 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En las redes locales, &iquest;qu&eacute; funciones tienen los repetidores?:";
 choices[24]= new Array();
 choices[24][0] = "Repiten los paquetes como se&ntilde;ales el&eacute;ctricas de una red a otra";
 choices[24][1] = "Repiten los paquetes incompletos para que sean reenviados completos";
 choices[24][2] = "Eliminan el ruido de las se&ntilde;ales en la l&iacute;nea y emiten los paquetes regenerados";
 choices[24][3] = "Repiten y ampl&iacute;an las se&ntilde;ales el&eacute;ctricas, incluyendo el ruido";
 answers[24] = choices[24][2];
 units[24] = "102";
 comments[24] = "Id Pregunta: 3534. ";


//  Id pregunta: 3576 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En una red local con un &uacute;nico servidor de ficheros, existen problemas de tiempo de respuesta pues un excesivo n&uacute;mero de nodos intenta acceso al mismo. Indique cual de las opciones siguientes resuelve t&eacute;cnica y econ&oacute;micamente el problema:";
 choices[25]= new Array();
 choices[25][0] = "La utilizaci&oacute;n de un gateway entre dos segmentos de la red";
 choices[25][1] = "La utilizaci&oacute;n de un router entre los dos segmentos de la red";
 choices[25][2] = "La utilizaci&oacute;n de un bridge entre los dos segmentos de la red";
 choices[25][3] = "Ning&uacute;n dispositivo de comunicaciones resolver&iacute;a el problema";
 answers[25] = choices[25][3];
 units[25] = "102";
 comments[25] = "Id Pregunta: 3576. ";


//  Id pregunta: 3650 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La tecnolog&iacute;a que pretende extender la banda ancha a los hogares usando Ethernet se denomina:";
 choices[26]= new Array();
 choices[26][0] = "Home Ethernet";
 choices[26][1] = "City Ethernet";
 choices[26][2] = "Instant Ethernet";
 choices[26][3] = "Ethernet To The Home";
 answers[26] = choices[26][3];
 units[26] = "101";
 comments[26] = "Id Pregunta: 3650. ";


//  Id pregunta: 3684 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La velocidad de transmisi&oacute;n que se puede alcanzar con tecnolog&iacute;a Bluetooth versi&oacute;n 1.1 es de:";
 choices[27]= new Array();
 choices[27][0] = "1 Mbps";
 choices[27][1] = "384 kbps";
 choices[27][2] = "5 Mbps";
 choices[27][3] = "11 Mbps";
 answers[27] = choices[27][0];
 units[27] = "107";
 comments[27] = "Id Pregunta: 3684. NULL";


//  Id pregunta: 3690 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se&ntilde;ale la opcion mas adecuada: Las bandas de frecuencia utilizables en un cable coaxial se encuentran:";
 choices[28]= new Array();
 choices[28][0] = "Entre 60 KHz y 3 GHz";
 choices[28][1] = "Sobre los 100 MHz";
 choices[28][2] = "Entre 4 y 11 GHz";
 choices[28][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[28] = choices[28][0];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3690. ";


//  Id pregunta: 3736 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los protocolos de control de enlace se orientan:";
 choices[29]= new Array();
 choices[29][0] = "A objeto";
 choices[29][1] = "A baudio";
 choices[29][2] = "A car&aacute;cter o a bit";
 choices[29][3] = "A una trama de tama&ntilde;o variable, hasta 256 bits";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3736. NULL";


//  Id pregunta: 3754 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Nombre y caracter&iacute;sticas del mecanismo de encriptado y autenticaci&oacute;n especificado en el est&aacute;ndar 802.11:";
 choices[30]= new Array();
 choices[30][0] = "WAP, con clave de hasta 40 bits";
 choices[30][1] = "WEP, con clave de hasta 40 bits";
 choices[30][2] = "WEP, con clave de hasta 128 bits";
 choices[30][3] = "WTLS, con clave de hasta 128 bits";
 answers[30] = choices[30][2];
 units[30] = "107";
 comments[30] = "Id Pregunta: 3754. NULL";


//  Id pregunta: 3764 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Para la interconexi&oacute;n de redes locales se han especificado diversos equipos. Indique cu&aacute;l de las opciones es correcta:";
 choices[31]= new Array();
 choices[31][0] = "Un router necesariamente une segmentos de red con distinto protocolo de enlace, o nivel dos";
 choices[31][1] = "Un router une dos segmentos de red utilizando exclusivamente la informaci&oacute;n de nivel tres para el filtrado de las direcciones";
 choices[31][2] = "Un router necesariamente une segmentos de red con el mismo protocolo de enlace, o de nivel dos";
 choices[31][3] = "Todas las respuestas anteriores son correctas";
 answers[31] = choices[31][1];
 units[31] = "102";
 comments[31] = "Id Pregunta: 3764. ";


//  Id pregunta: 3776 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Por una misma fibra &oacute;ptica:";
 choices[32]= new Array();
 choices[32][0] = "Puede transportarse tr&aacute;fico asociado a varios PVCs y SVCs";
 choices[32][1] = "S&oacute;lo puede viajar tr&aacute;fico asociado a un &uacute;nico PVC configurado para tal fin";
 choices[32][2] = "No puede llevar tr&aacute;fico asociado a PVCs";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][0];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3776. ";


//  Id pregunta: 3918 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es falsa?";
 choices[33]= new Array();
 choices[33][0] = "La longitud de la cabecera de los paquetes no es fija";
 choices[33][1] = "Usa direcciones de 128 bits";
 choices[33][2] = "Soporte intr&iacute;nseco de seguridad (Ipsec)";
 choices[33][3] = "Soporte de autoconfiguraci&oacute;n (los hosts determinan su direcci&oacute;n de manera autom&aacute;tica)";
 answers[33] = choices[33][0];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3918. NULL";


//  Id pregunta: 3923 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Ventajas de los CD-ROM en el almacenamiento de informaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Gran capacidad de almacenamiento.";
 choices[34][1] = "Larga duraci&oacute;n y bajo coste.";
 choices[34][2] = "Todas las anteriores.";
 choices[34][3] = "Ninguna de las anteriores.";
 answers[34] = choices[34][2];
 units[34] = "97";
 comments[34] = "Id Pregunta: 3923. NULL";


//  Id pregunta: 3998 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En relaci&oacute;n con las redes de distribuci&oacute;n HFC, se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Los amplificadores de l&iacute;nea (Line Extender) son componentes activos.";
 choices[35][1] = "Los taps son componentes pasivos.";
 choices[35][2] = "Los amplificadores de l&iacute;nea (Line Extender), en sentido ascendente, utilizan configuraciones de amplificaci&oacute;n en paralelo denominadas &ldquo;power dubbing&rdquo; o &ldquo;feed forward&rdquo;.";
 choices[35][3] = "Los taps derivan parte de la energ&iacute;a que circula por el coaxial hacia las terminaciones donde se conectan las acometidas de usuario.";
 answers[35] = choices[35][2];
 units[35] = "105";
 comments[35] = "Id Pregunta: 3998. ";


//  Id pregunta: 4017 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  La separaci&oacute;n entre subportadoras en la modulaci&oacute;n DMT de ADSL es de:";
 choices[36]= new Array();
 choices[36][0] = "4,3125 KHz";
 choices[36][1] = "4,3215 KHz";
 choices[36][2] = "4,315 KHz";
 choices[36][3] = "4,3175 KHz";
 answers[36] = choices[36][0];
 units[36] = "107";
 comments[36] = "Id Pregunta: 4017. NULL";


//  Id pregunta: 4044 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l es el l&iacute;mite m&aacute;ximo de la multa que se puede imponer por la comisi&oacute;n de una infracci&oacute;n leve seg&uacute;n la Ley 32/2003 de Telecomunicaciones?";
 choices[37]= new Array();
 choices[37][0] = "50.000 euros";
 choices[37][1] = "30.000 euros";
 choices[37][2] = "500.000 euros";
 choices[37][3] = "60.000 euros";
 answers[37] = choices[37][0];
 units[37] = "110";
 comments[37] = "Id Pregunta: 4044. ";


//  Id pregunta: 4064 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[38]= new Array();
 choices[38][0] = "La defensa de los productos de las multinacionales";
 choices[38][1] = "Evitar que se pueda difundir el software libre";
 choices[38][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[38][3] = "La defensa de los derechos de los autores";
 answers[38] = choices[38][3];
 units[38] = "36";
 comments[38] = "Id Pregunta: 4064. ";


//  Id pregunta: 4082 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El protocolo y puerto empleado para la transferencia de p&aacute;ginas web es";
 choices[39]= new Array();
 choices[39][0] = "html y 80";
 choices[39][1] = "http y 80";
 choices[39][2] = "http y 8080";
 choices[39][3] = "ftp y 80";
 answers[39] = choices[39][1];
 units[39] = "113";
 comments[39] = "Id Pregunta: 4082. ";


//  Id pregunta: 4083 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes software no funciona actualmente sobre Linux?";
 choices[40]= new Array();
 choices[40][0] = "PHP";
 choices[40][1] = "Java";
 choices[40][2] = "Lucene";
 choices[40][3] = "Jscript";
 answers[40] = choices[40][3];
 units[40] = "114";
 comments[40] = "Id Pregunta: 4083. ";


//  Id pregunta: 4148 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Cada uno de los equipos comprometidos y utilizados para lanzar un ataque de denegaci&oacute;n de servicio distribuido contra un objetivo concreto se llama";
 choices[41]= new Array();
 choices[41][0] = "dongle";
 choices[41][1] = "token";
 choices[41][2] = "repetidor";
 choices[41][3] = "zombie";
 answers[41] = choices[41][3];
 units[41] = "111";
 comments[41] = "Id Pregunta: 4148. NULL";


//  Id pregunta: 4151 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El sistema de gesti&oacute;n de la seguridad que autoriza el acceso de usuarios a recursos en entorno OS/390 se llama";
 choices[42]= new Array();
 choices[42][0] = "ACF2";
 choices[42][1] = "RACF";
 choices[42][2] = "RADIUS";
 choices[42][3] = "CICS";
 answers[42] = choices[42][1];
 units[42] = "111";
 comments[42] = "Id Pregunta: 4151. NULL";


//  Id pregunta: 4186 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Respecto al protocolo IP es falso que";
 choices[43]= new Array();
 choices[43][0] = "En IPv6 las direcciones anycast tienen un rango de numeraci&oacute;n diferenciado";
 choices[43][1] = "IPv4 permite priorizaci&oacute;n de tr&aacute;fico";
 choices[43][2] = "IPv6 permite la asignaci&oacute;n de direcciones multicast permanentes";
 choices[43][3] = "Se puede transmitir IPv6 sobre redes IPv4";
 answers[43] = choices[43][0];
 units[43] = "100";
 comments[43] = "Id Pregunta: 4186. ";


//  Id pregunta: 4235 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos";
 choices[44]= new Array();
 choices[44][0] = "De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n";
 choices[44][1] = "De 5 bytes";
 choices[44][2] = "De 48 bytes";
 choices[44][3] = "De 53 bytes";
 answers[44] = choices[44][3];
 units[44] = "109";
 comments[44] = "Id Pregunta: 4235. ";


//  Id pregunta: 4334 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La topolog&iacute;a de una LAN puede ser:";
 choices[45]= new Array();
 choices[45][0] = "BUS, Anillo, Estrella y Mixta.";
 choices[45][1] = "&Aacute;rbol, Anillo y Estrella";
 choices[45][2] = "BUS, Anillo, Estrella, Completa, &Aacute;rbol o Mixta.";
 choices[45][3] = "BUS, Anillo, Estrella, &Aacute;rbol y Mixta.";
 answers[45] = choices[45][2];
 units[45] = "100";
 comments[45] = "Id Pregunta: 4334. ";


//  Id pregunta: 4428 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[46]= new Array();
 choices[46][0] = "Arquitectura abierta";
 choices[46][1] = "Control centralizado";
 choices[46][2] = "Basada en TCP/IP";
 choices[46][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[46] = choices[46][1];
 units[46] = "112";
 comments[46] = "Id Pregunta: 4428. ";


//  Id pregunta: 4548 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  La reserva para uso privativo de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico a favor de una o varias personas o entidades:";
 choices[47]= new Array();
 choices[47][0] = "No requiere ning&uacute;n tipo de pago al Estado. &Uacute;nicamente es necesaria su notificaci&oacute;n a la Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[47][1] = "Se gravar&aacute; con una tasa anual por reserva del dominio publico radioel&eacute;ctrico.";
 choices[47][2] = "Requiere el pago de una tasa &uacute;nica al inicio de la utilizaci&oacute;n de dichas frecuencias que se negociar&aacute; entre el Estado y el beneficiario de la reserva.";
 choices[47][3] = "Requiere el pago de una tasa a negociar entre el beneficiario de Ia reserva y las personas o entidades que ocupan las bandas de frecuencias adyacentes a la reservada.";
 answers[47] = choices[47][1];
 units[47] = "110";
 comments[47] = "Id Pregunta: 4548. ";


//  Id pregunta: 4628 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Que entidad publica empresarial tiene atribuida la autoridad de asignaci&oacute;n de nombres de dominio .es?:";
 choices[48]= new Array();
 choices[48][0] = "Red.es";
 choices[48][1] = "FNMT";
 choices[48][2] = "dominios.es";
 choices[48][3] = "Red Iris";
 answers[48] = choices[48][0];
 units[48] = "";
 comments[48] = "Id Pregunta: 4628. ";


//  Id pregunta: 4969 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes redes no admite asignar niveles de prioridad en el tr&aacute;fico transmitido?:";
 choices[49]= new Array();
 choices[49][0] = "802.6.";
 choices[49][1] = "802.3.";
 choices[49][2] = "802.4.";
 choices[49][3] = "802.5.";
 answers[49] = choices[49][1];
 units[49] = "101";
 comments[49] = "Id Pregunta: 4969. Examen TIC B 2007";


//  Id pregunta: 5031 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece que:";
 choices[50]= new Array();
 choices[50][0] = "El Gobierno crear&aacute; una entidad p&uacute;blica para la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[50][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[50][2] = "El Gobierno, mediante Decreto, establecer&aacute; el procedimiento por el que las operadoras gestionar&aacute;n elFondo nacional del servicio universal";
 choices[50][3] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n se encargar&aacute; de lagesti&oacute;n del Fondo nacional del servicio universal";
 answers[50] = choices[50][1];
 units[50] = "110";
 comments[50] = "Id Pregunta: 5031. Examen TIC A 2007";


//  Id pregunta: 5041 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece como infracci&oacute;n leve:";
 choices[51]= new Array();
 choices[51][0] = "La realizaci&oacute;n de actividades sin t&iacute;tulo habilitante cuando sea legalmente necesario";
 choices[51][1] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en lanormativa reguladora de las telecomunicaciones, sea necesaria";
 choices[51][2] = "No facilitar los datos requeridos por la Administraci&oacute;n o retrasar injustificadamente su aportaci&oacute;n cuando resulte exigible conforme a lo previsto por la normativa reguladora de las comunicaciones electr&oacute;nicas.";
 choices[51][3] = " La transferencia de t&iacute;tulos habilitantes o cesi&oacute;n de derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico, sin cumplir con los requisitos establecidos a tal efecto por la normativa de desarrollo de esta Ley";
 answers[51] = choices[51][2];
 units[51] = "110";
 comments[51] = "Id Pregunta: 5041. Examen TIC A 2007. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 5284 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique cu&aacute;l de las siguientes opciones no se relaciona con un desarrollo JAVA: ";
 choices[52]= new Array();
 choices[52][0] = "Hibernate";
 choices[52][1] = "Biztalk";
 choices[52][2] = "Java Server Faces";
 choices[52][3] = "Spring";
 answers[52] = choices[52][1];
 units[52] = "116";
 comments[52] = "Id Pregunta: 5284. ";


//  Id pregunta: 5421 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  La API JDBC se utiliza:";
 choices[53]= new Array();
 choices[53][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n se pueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones que soporta un SGBD relacional";
 choices[53][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional.";
 choices[53][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas a procedimientos almacenados no est&aacute;n soportados.";
 choices[53][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas de las funciones que soporta un SGBD relacional.";
 answers[53] = choices[53][0];
 units[53] = "116";
 comments[53] = "Id Pregunta: 5421. Castilla y Le&oacute;n";


//  Id pregunta: 5828 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[54]= new Array();
 choices[54][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[54][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[54][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[54][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[54] = choices[54][1];
 units[54] = "109";
 comments[54] = "Id Pregunta: 5828. MAP 2008 A1";


//  Id pregunta: 5910 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Qu&eacute; NO garantiza el Servicio Universal contemplado por la Ley 9/2014, General de Telecomunicaciones?";
 choices[55]= new Array();
 choices[55][0] = "El ciudadano podr&aacute; elegir, para la prestaci&oacute;n de este servicio, a cualquiera de los operadores registrados a nivel nacional";
 choices[55][1] = "Todos los usuarios finales podr&aacute;n obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[55][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[55][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[55] = choices[55][0];
 units[55] = "110";
 comments[55] = "Id Pregunta: 5910. MAP 2008 A1";


//  Id pregunta: 5953 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; es com&uacute;n a todas las tecnolog&iacute;as de virtualizaci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "Simulaci&oacute;n del Hardware Completo";
 choices[56][1] = "Simulaci&oacute;n del Sistema Operativo";
 choices[56][2] = "Ocultaci&oacute;n de los detalles t&eacute;cnicos a trav&eacute;s de la encapsulaci&oacute;n";
 choices[56][3] = "Paravirtualizaci&oacute;n, donde se ofrece un API especial que debe usarse modificando el sistema operativo &quot;guest&quot;";
 answers[56] = choices[56][2];
 units[56] = "119";
 comments[56] = "Id Pregunta: 5953. ";


//  Id pregunta: 5982 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  SIP (Session Initiation Protocol) es un protocolo que sirve para:";
 choices[57]= new Array();
 choices[57][0] = "Establecer videoconferencias sobre redes con calidad de servicio (ancho de banda garantizado).";
 choices[57][1] = "Realizar el transporte de flujos multimedia.";
 choices[57][2] = "Iniciar una sesi&oacute;n de correo web.";
 choices[57][3] = "Control y se&ntilde;alizaci&oacute;n, permite establecer y gestionar llamadas/conexiones de flujos multimedia.";
 answers[57] = choices[57][3];
 units[57] = "117";
 comments[57] = "Id Pregunta: 5982. TIC A 2009";


//  Id pregunta: 6114 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  La planificaci&oacute;n de las redes radioel&eacute;ctricas:";
 choices[58]= new Array();
 choices[58][0] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n a la Direcci&oacute;n General de Telecomunicaciones.";
 choices[58][1] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n al Ayuntamiento correspondiente.";
 choices[58][2] = "La realiza la Direcci&oacute;n General de Telecomunicaciones con objeto de no causar interferencias entre diferentes servicios.";
 choices[58][3] = "Se realiza en comisi&oacute;n paritaria entre el operador y la Direcci&oacute;n General de Telecomunicaciones con objeto de evitar interferencias entre diferentes servicios.";
 answers[58] = choices[58][0];
 units[58] = "110";
 comments[58] = "Id Pregunta: 6114. TIC A 2010";


//  Id pregunta: 6477 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Qu&eacute; componentes incluye la .net framework class library?";
 choices[59]= new Array();
 choices[59][0] = "Common language runtime (CLR) and the .NET framework class library";
 choices[59][1] = "ADO.NET, ASP.NET, Windows Forms, and Windows Presentation Foundation (WPF)";
 choices[59][2] = "ASP.NET applications, Web Forms and Web Services";
 choices[59][3] = "Windows Presentation Foundation (WPF), ASP.NET Portal, Windows Form Portal";
 answers[59] = choices[59][1];
 units[59] = "115";
 comments[59] = "Id Pregunta: 6477. Castilla La Mancha 2009";


//  Id pregunta: 6576 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Un protocolo de tunelado";
 choices[60]= new Array();
 choices[60][0] = "Mueve tramas de una red a otra";
 choices[60][1] = "Coloca dichas tramas en tramas encapsuladas enrutables";
 choices[60][2] = "A y B son correctas";
 choices[60][3] = "A y B son incorrectas";
 answers[60] = choices[60][2];
 units[60] = "101";
 comments[60] = "Id Pregunta: 6576. ";


//  Id pregunta: 7264 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Existen diferencias entre ADSL2 y ADSL2+. Se&ntilde;ale la INCORRECTA:";
 choices[61]= new Array();
 choices[61][0] = "La velocidad m&aacute;xima. ADSL2+ alcanza mayores velocidades";
 choices[61][1] = "El ancho de banda. ADSL2+ ocupa mayor ancho de banda";
 choices[61][2] = "La infraestructura necesaria. ADSL2+ requiere una instalaci&oacute;n m&aacute;s compleja que ADSL2 para proporcionar la transici&oacute;n desde ADSL";
 choices[61][3] = "El n&uacute;mero de pares de cobre entrelazados. ADSL2+ requiere el doble de pares de cobre entrelazados";
 answers[61] = choices[61][3];
 units[61] = "107";
 comments[61] = "Id Pregunta: 7264. Examen TIC B 2009";


//  Id pregunta: 7265 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En telefon&iacute;a m&oacute;vil, la tecnolog&iacute;a GSM utiliza las siguientes bases de datos de usuarios";
 choices[62]= new Array();
 choices[62][0] = "HLR y VLR";
 choices[62][1] = "VLR y MSC";
 choices[62][2] = "NMC y OMC";
 choices[62][3] = "AUC y NMC";
 answers[62] = choices[62][0];
 units[62] = "108";
 comments[62] = "Id Pregunta: 7265. Examen TIC B 2009";


//  Id pregunta: 7271 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Una conexi&oacute;n FTP puede funcionar en modo activo o pasivo. Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "El modo pasivo sirve, para que una vez iniciada una transferencia de archivos, poder iniciar otra transferencia sin tener que esperar a la finalizaci&oacute;n de la primera";
 choices[63][1] = "El modo pasivo es muy recomendable cuando el cliente tiene una conexi&oacute;n con cortafuegos, ya que en esta modalidad, tanto el canal de control como el canal de datos los abre el cliente";
 choices[63][2] = "En el modo pasivo se fuerza que, tanto el cliente como el servidor usen los puertos 20 y 21 para el env&iacute;o de los datos y la informaci&oacute;n de control rec&iacute;procamente y evitar problemas con los cortafuegos";
 choices[63][3] = "El modo pasivo, facilita que tanto la informaci&oacute;n de control como la de datos se transmita por el mismo puerto (el 21 en el servidor y cualquier puerto en el cliente)";
 answers[63] = choices[63][1];
 units[63] = "112";
 comments[63] = "Id Pregunta: 7271. NULL";


//  Id pregunta: 8216 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En el modelo de referencia de Interconexi&oacute;n de sistemas abiertos (OSI/ISO), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[64]= new Array();
 choices[64][0] = "Las normas de intercomunicaci&oacute;n entre capas constituyen cada protocolo.";
 choices[64][1] = "No todos los nodos participantes en una comunicaci&oacute;n necesitan implementar todas las capas del modelo.";
 choices[64][2] = "Cada entidad del nivel N se comunica directamente con su par.";
 choices[64][3] = "Al especificar cualquier servicio que una capa proporciona, se emplean siempre las primitivas REQUEST, INDICATION, RESPONSE, CONFIRM.";
 answers[64] = choices[64][1];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8216. Examen TIC A1 2010";


//  Id pregunta: 8246 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Para garantizar la protecci&oacute;n sanitaria frente a las ondas electromagn&eacute;ticas de telefon&iacute;a m&oacute;vil, los operadores de telefon&iacute;a m&oacute;vil deben:";
 choices[65]= new Array();
 choices[65][0] = "Situar las estaciones base fuera de las ciudades, de tal forma que al estar m&aacute;s alejadas, la potencia que reciban las personas debida a una comunicaci&oacute;n por telefon&iacute;a m&oacute;vil sea menor.";
 choices[65][1] = "Instalar las estaciones base de manera que el diagrama de emisi&oacute;n no incida sobre el propio edificio, terraza o &aacute;tico, si se instalan en una azotea.";
 choices[65][2] = "Fijar la potencia con la que emiten las estaciones base para que sea 1/4 de la SAR (Tasa de absorci&oacute;n espec&iacute;fica) de un tel&eacute;fono m&oacute;vil.";
 choices[65][3] = "Instalar las estaciones base en cualquier sitio, ya que la telefon&iacute;a m&oacute;vil emite ondas ionizantes que no afectan a la salud.";
 answers[65] = choices[65][1];
 units[65] = "108";
 comments[65] = "Id Pregunta: 8246. Examen TIC A1 2010";


//  Id pregunta: 8296 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast? ";
 choices[66]= new Array();
 choices[66][0] = "256";
 choices[66][1] = "254";
 choices[66][2] = "30";
 choices[66][3] = "64";
 answers[66] = choices[66][1];
 units[66] = "100";
 comments[66] = "Id Pregunta: 8296. Examen TIC A2 2010";


//  Id pregunta: 8538 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[67]= new Array();
 choices[67][0] = "2.4 GHz y hasta 11 Mbps";
 choices[67][1] = " 5 GHz y hasta 54Mbps.";
 choices[67][2] = "2.4 GHz y hasta 54 Mbps.";
 choices[67][3] = "5 GHz y hasta 11 Mbps";
 answers[67] = choices[67][1];
 units[67] = "107";
 comments[67] = "Id Pregunta: 8538. Examen TIC A2 2010 interna";


//  Id pregunta: 8593 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  La librer&iacute;a Java API for XML Processing (JAXP):";
 choices[68]= new Array();
 choices[68][0] = "Permite tratar documentos XML tanto a trav&eacute;s de! modelo SAX como a trav&eacute;s del modelo DOM.";
 choices[68][1] = "Trabaja &uacute;nicamente con el modelo DOM.";
 choices[68][2] = "No existe tal librer&iacute;a en el lenguaje Java";
 choices[68][3] = "No tiene una Implementaci&oacute;n propia para el parser y obligatoriamente debe utilizar el parser del modelo DOM";
 answers[68] = choices[68][0];
 units[68] = "116";
 comments[68] = "Id Pregunta: 8593. Examen TIC A2 2010 interna";


//  Id pregunta: 8659 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Los tipos de direcciones en IPv6 son los siguientes:";
 choices[69]= new Array();
 choices[69][0] = "Unicast, Multicast y Anycast";
 choices[69][1] = "Unicast y Multicast";
 choices[69][2] = "Somecast y Groupcast";
 choices[69][3] = "Somecast, Multicast y Worldcast";
 answers[69] = choices[69][0];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8659. Examen UPM A2 2011";


//  Id pregunta: 8668 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[70]= new Array();
 choices[70][0] = "Capa IP";
 choices[70][1] = "Capa de Aplicaci&oacute;n";
 choices[70][2] = "Capa de Sesi&oacute;n";
 choices[70][3] = "Capa de Transporte";
 answers[70] = choices[70][0];
 units[70] = "111";
 comments[70] = "Id Pregunta: 8668. Examen UPM A2 2011";


//  Id pregunta: 8675 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[71]= new Array();
 choices[71][0] = "Es el elemento que conmuta etiquetas.";
 choices[71][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[71][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[71][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[71] = choices[71][0];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8675. Examen UPM A2 2011";


//  Id pregunta: 9016 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[72]= new Array();
 choices[72][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[72][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[72][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][2];
 units[72] = "99";
 comments[72] = "Id Pregunta: 9016. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9325 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; norma define el cableado";
 choices[73]= new Array();
 choices[73][0] = "ISO 50173";
 choices[73][1] = "ISO 11801";
 choices[73][2] = "ISO 18765";
 choices[73][3] = "ISO 80211";
 answers[73] = choices[73][1];
 units[73] = "99";
 comments[73] = "Id Pregunta: 9325. NULL";


//  Id pregunta: 9344 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "Intercambio de Informaci&oacute;n segura";
 choices[74][1] = "Arquitectura de Interoperabilidad";
 choices[74][2] = "Evaluaci&oacute;n de las implicaciones TIC de la nueva legislaci&oacute;n europea.";
 choices[74][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[74] = choices[74][0];
 units[74] = "103";
 comments[74] = "Id Pregunta: 9344. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";


//  Id pregunta: 9381 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[75]= new Array();
 choices[75][0] = "802.16m";
 choices[75][1] = "802.16e";
 choices[75][2] = "802.16k";
 choices[75][3] = "802.16-2009";
 answers[75] = choices[75][0];
 units[75] = "101";
 comments[75] = "Id Pregunta: 9381. ";


//  Id pregunta: 9395 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[76]= new Array();
 choices[76][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatica Repeat Request)";
 choices[76][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[76][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[76][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[76] = choices[76][3];
 units[76] = "108";
 comments[76] = "Id Pregunta: 9395. NULL";


//  Id pregunta: 9430 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Seg&uacute;n la ley 9/2014, el derecho de uso del dominio p&uacute;blico radioel&eacute;ctrico es otorgado por:";
 choices[77]= new Array();
 choices[77][0] = "La Agencia Estatal de Radiocomunicaciones";
 choices[77][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[77][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[77][3] = "El Gobierno";
 answers[77] = choices[77][1];
 units[77] = "110";
 comments[77] = "Id Pregunta: 9430. NULL";


//  Id pregunta: 9881 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[78]= new Array();
 choices[78][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[78][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[78][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[78][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[78] = choices[78][1];
 units[78] = "99, 102";
 comments[78] = "Id Pregunta: 9881. TIC A1, Examen 2013";


//  Id pregunta: 9925 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Respecto al protocolo HDLC, indique la falsa:";
 choices[79]= new Array();
 choices[79][0] = "Significa High-Level Data Link Control y est&aacute; basado en el ISO 3339.";
 choices[79][1] = "Usa transmisi&oacute;n s&iacute;ncrona y todos los intercambios se realizan a trav&eacute;s de tramas.";
 choices[79][2] = "Utiliza un formato &uacute;nico de tramas, tanto para datos como para informaci&oacute;n de control.";
 choices[79][3] = "Es el protocolo m&aacute;s importante para el enlace de datos, siendo la base para otros protocolos de nivel 2.";
 answers[79] = choices[79][0];
 units[79] = "100";
 comments[79] = "Id Pregunta: 9925. NULL";


//  Id pregunta: 9933 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l no es un fallo detectado en el modelo de referencia OSI?";
 choices[80]= new Array();
 choices[80][0] = "Se desarroll&oacute; antes de que se inventaran los protocolos, as&iacute; que no se sab&iacute;a qu&eacute; funcionalidad poner en cada capa.";
 choices[80][1] = "Las capas de red y enlace de datos est&aacute;n muy llenas y se han subdividido en subcapas, cada una con funciones distintas.";
 choices[80][2] = "La administraci&oacute;n de la red es clave en el modelo.";
 choices[80][3] = "El modelo est&aacute; dominado por una mentalidad de comunicaciones.";
 answers[80] = choices[80][2];
 units[80] = "100";
 comments[80] = "Id Pregunta: 9933. NULL";


//  Id pregunta: 10059 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[81]= new Array();
 choices[81][0] = "TIER I ";
 choices[81][1] = "TIER II";
 choices[81][2] = "TIER III ";
 choices[81][3] = "TIER IV";
 answers[81] = choices[81][2];
 units[81] = "99";
 comments[81] = "Id Pregunta: 10059. TIC A2, libre, Examen 2013";


//  Id pregunta: 10075 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  La tecnolog&iacute;a WiMAX 2 es conocida formalmente como:";
 choices[82]= new Array();
 choices[82][0] = "802.16m ";
 choices[82][1] = "802.16a";
 choices[82][2] = "802.11x ";
 choices[82][3] = "802.11n";
 answers[82] = choices[82][0];
 units[82] = "101";
 comments[82] = "Id Pregunta: 10075. TIC A2, libre, Examen 2013";


//  Id pregunta: 10122 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el encaminamiento por estado de los enlaces cada router:";
 choices[83]= new Array();
 choices[83][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[83][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[83][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[83][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[83] = choices[83][3];
 units[83] = "102";
 comments[83] = "Id Pregunta: 10122. ";


//  Id pregunta: 10302 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[84]= new Array();
 choices[84][0] = "15 bits.";
 choices[84][1] = "8 bits.";
 choices[84][2] = "10 bits.";
 choices[84][3] = "3 bits.";
 answers[84] = choices[84][1];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10302. TIC A2, libre, examen 2013";


//  Id pregunta: 10321 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[85]= new Array();
 choices[85][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este par&aacute;metro.";
 choices[85][1] = "No, necesitar&iacute;a una base de datos externa para almacenarlo.";
 choices[85][2] = "Si, s&oacute;lo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[85][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[85] = choices[85][0];
 units[85] = "104";
 comments[85] = "Id Pregunta: 10321. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Que estandar establece el formato de la numeracion, las direcciones email y las direcciones web?";
 choices[86]= new Array();
 choices[86][0] = "E.122";
 choices[86][1] = "E.123";
 choices[86][2] = "E.231";
 choices[86][3] = "Ninguna de las anteriores";
 answers[86] = choices[86][1];
 units[86] = "109";
 comments[86] = "Id Pregunta: 10512. NULL";


//  Id pregunta: 10517 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Cu&aacute;l es el plazo m&aacute;ximo en el cual Registro de Operadores dictar&aacute;n resoluci&oacute;n motivada cuando constate que una notificaci&oacute;n no re&uacute;ne los requisitos establecidos:";
 choices[87]= new Array();
 choices[87][0] = "10 d&iacute;as";
 choices[87][1] = "15 d&iacute;as";
 choices[87][2] = "1 mes";
 choices[87][3] = "3 meses";
 answers[87] = choices[87][1];
 units[87] = "110";
 comments[87] = "Id Pregunta: 10517. ";


//  Id pregunta: 10910 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La tecnolog&iacute;a de telefon&iacute;a m&oacute;vil GSM utiliza, entre otras, la siguiente base de datos de usuarios:";
 choices[88]= new Array();
 choices[88][0] = "MSC";
 choices[88][1] = "BSC";
 choices[88][2] = "NSS";
 choices[88][3] = "VLR";
 answers[88] = choices[88][3];
 units[88] = "108";
 comments[88] = "Id Pregunta: 10910. Examen GSI 2014";


//  Id pregunta: 10948 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Para una red wifi, &iquest;c&uacute;al de los siguientes NO es un protocolo de seguridad que le sea aplicable?";
 choices[89]= new Array();
 choices[89][0] = "WPA2.";
 choices[89][1] = "WPA.";
 choices[89][2] = "WAP.";
 choices[89][3] = "WEP.";
 answers[89] = choices[89][2];
 units[89] = "107";
 comments[89] = "Id Pregunta: 10948. TIC A1 AGE 2014";


//  Id pregunta: 10966 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  NO es una plataforma de virtualizaci&oacute;n:";
 choices[90]= new Array();
 choices[90][0] = "KVM.";
 choices[90][1] = "XEN.";
 choices[90][2] = "Hyper-V.";
 choices[90][3] = "VSuite.";
 answers[90] = choices[90][3];
 units[90] = "119";
 comments[90] = "Id Pregunta: 10966. TIC A1 AGE 2014";


//  Id pregunta: 11174 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes es una herramienta utilizada para el cifrado de correos electr&oacute;nicos";
 choices[91]= new Array();
 choices[91][0] = "PGP";
 choices[91][1] = "S/MME";
 choices[91][2] = "Todos los anteriores";
 choices[91][3] = "Ninguno de los anteriores";
 answers[91] = choices[91][2];
 units[91] = "106";
 comments[91] = "Id Pregunta: 11174. ";


//  Id pregunta: 11186 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes supuestos permite al Minetur revocar los t&iacute;tulos habilitantes, de acuerdo con la LGT 9/2014?";
 choices[92]= new Array();
 choices[92][0] = "No se efect&uacute;a un uso eficaz y eficiente";
 choices[92][1] = "Utiliza frecuencias con fines distintos a los que motivaron su asignaci&oacute;n";
 choices[92][2] = "No pagar el Impuesto de Transmisiones Patrimoniales y Actos Jur&iacute;dicos";
 choices[92][3] = "Todos los anteriores";
 answers[92] = choices[92][3];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11186. ";


//  Id pregunta: 11307 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a los c&oacute;digos HTTP";
 choices[93]= new Array();
 choices[93][0] = "Los c&oacute;digos que comienzan por 4 (4xx) informan de un error en el cliente";
 choices[93][1] = "El c&oacute;digo 401 informa que el recurso no se ha encontrado";
 choices[93][2] = "El c&oacute;digo 403 informa de una redirecci&oacute;n en el recurso accedido";
 choices[93][3] = "El c&oacute;digo 404 indica que no hay autorizaci&oacute;n para acceder al recurso";
 answers[93] = choices[93][0];
 units[93] = "112";
 comments[93] = "Id Pregunta: 11307. ";


//  Id pregunta: 11323 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Qu&eacute; tipo de registro se corresponde DNS, se corresponde con esta definici&oacute;n: &quot;Este registro se usa en IPv6 para traducirnombres de hosts a direcciones IPv6.&quot;";
 choices[94]= new Array();
 choices[94][0] = "Tipo A";
 choices[94][1] = "Tipo AAAA";
 choices[94][2] = "Tipo CNAME";
 choices[94][3] = "Tipo NS";
 answers[94] = choices[94][1];
 units[94] = "113";
 comments[94] = "Id Pregunta: 11323. ";


//  Id pregunta: 11351 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En cuanto al formato de la cabecera IPv6, se&ntilde;ale la opci&oacute;n verdadera";
 choices[95]= new Array();
 choices[95][0] = "4 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[95][1] = "4 bits de versi&oacute;n, 20 bits de clase de tr&aacute;fico, 8 etiqueta de flujo";
 choices[95][2] = "8 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[95][3] = "4 bits de versi&oacute;n, 4 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 answers[95] = choices[95][0];
 units[95] = "100";
 comments[95] = "Id Pregunta: 11351. ";


//  Id pregunta: 11664 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El mandato del Presidente de la CNMC tiene una duraci&oacute;n de:";
 choices[96]= new Array();
 choices[96][0] = "4 a&ntilde;os no renovables";
 choices[96][1] = "4 a&ntilde;os renovables";
 choices[96][2] = "6 a&ntilde;os no renovables";
 choices[96][3] = "6 a&ntilde;os renovables";
 answers[96] = choices[96][2];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11664. ";


//  Id pregunta: 11705 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Qu&eacute; direcci&oacute;n multicast utiliza RIPng";
 choices[97]= new Array();
 choices[97][0] = "FF02::9";
 choices[97][1] = "FF02::1";
 choices[97][2] = "FF02:A";
 choices[97][3] = "FF02::6";
 answers[97] = choices[97][0];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11705. NULL";


//  Id pregunta: 11714 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;les de los siguientes protocolos no incluye la suite PPP?";
 choices[98]= new Array();
 choices[98][0] = "LAPB";
 choices[98][1] = "HDLC";
 choices[98][2] = "LCP";
 choices[98][3] = "SDLC";
 answers[98] = choices[98][0];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11714. NULL";


//  Id pregunta: 11720 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)   El n&uacute;mero binario 11110011 puede expresarse en hexadecimal como:";
 choices[99]= new Array();
 choices[99][0] = "A9";
 choices[99][1] = "F3";
 choices[99][2] = "0C";
 choices[99][3] = "FC";
 answers[99] = choices[99][1];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11720. NULL";


